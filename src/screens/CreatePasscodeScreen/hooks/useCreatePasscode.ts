import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { setPasscode as savePasscode } from 'utils/keychain';
import { PasscodeView } from '../CreatePasscodeScreen.types';
import { openToast } from 'utils/toast';
import { useTranslation } from 'react-i18next';

export const useCreatePasscode = () => {
  const { t } = useTranslation();
  const [view, setView] = useState<PasscodeView>('SetPasscode');
  const [valueLength, setValueLength] = useState(0);
  const [passcode, setPasscode] = useState('');
  const [repeatPasscode, setRepeatPasscode] = useState('');
  const { goBack } = useNavigation();
  const { params } = useRoute();

  const DELETE_KEY = 11;
  const MAX_INPUT_COUNT = 4;

  const onPasscodePress = (key: number) => {
    if (key === DELETE_KEY && passcode !== '') {
      setPasscode(passcode.slice(0, passcode.length - 1));
    } else if (key !== DELETE_KEY && passcode.length < MAX_INPUT_COUNT) {
      setPasscode(`${passcode}${key}`);
    }
  };

  const onRepeatPasscodePress = (key: number) => {
    if (key === DELETE_KEY && repeatPasscode !== '') {
      setRepeatPasscode(repeatPasscode.slice(0, repeatPasscode.length - 1));
    } else if (key !== DELETE_KEY && repeatPasscode.length < MAX_INPUT_COUNT) {
      setRepeatPasscode(`${repeatPasscode}${key}`);
    }
  };

  useEffect(() => {
    setValueLength(passcode.length);
  }, [passcode]);

  useEffect(() => {
    if (passcode.length === MAX_INPUT_COUNT) {
      setView('RepeatPasscode');
      setValueLength(0);
    }
  }, [passcode]);

  useEffect(() => {
    setValueLength(repeatPasscode.length);
  }, [repeatPasscode]);

  useEffect(() => {
    if (repeatPasscode.length === MAX_INPUT_COUNT) {
      if (passcode !== repeatPasscode) {
        openToast(t('passcodesDoNotMatch'), 'error');
        setPasscode('');
        setRepeatPasscode('');
        setView('SetPasscode');
      } else {
        savePasscode(passcode);
        setView('SetPasscode');
        setPasscode('');
        setRepeatPasscode('');
        setValueLength(0);
        goBack();
        (params as any)?.onSuccess();
      }
    }
  }, [repeatPasscode, passcode, goBack, params, t]);

  return {
    onRepeatPasscodePress,
    onPasscodePress,
    valueLength,
    view,
  };
};
