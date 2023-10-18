import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { setPasscode as savePasscode } from 'storage/index';
import { PasscodeView } from './CreatePasscodeScreen.types';

export const useCreatePasscode = () => {
  const [view, setView] = useState<PasscodeView>('SetPasscode');
  const [valueLength, setValueLength] = useState(0);
  const [passcode, setPasscode] = useState('');
  const [repeatPasscode, setRepeatPasscode] = useState('');
  const { goBack } = useNavigation();
  const { params } = useRoute();

  const onPasscodePress = (key: number) => {
    if (key === 11 && passcode !== '') {
      setPasscode(passcode.slice(0, passcode.length - 1));
    } else if (key !== 11 && passcode.length < 4) {
      setPasscode(`${passcode}${key}`);
    }
  };

  const onRepeatPasscodePress = (key: number) => {
    if (key === 11 && repeatPasscode !== '') {
      setRepeatPasscode(repeatPasscode.slice(0, repeatPasscode.length - 1));
    } else if (key !== 11 && repeatPasscode.length < 4) {
      setRepeatPasscode(`${repeatPasscode}${key}`);
    }
  };

  useEffect(() => {
    setValueLength(passcode.length);
  }, [passcode]);

  useEffect(() => {
    if (passcode.length === 4) {
      setView('RepeatPasscode');
      setValueLength(0);
    }
  }, [passcode]);

  useEffect(() => {
    setValueLength(repeatPasscode.length);
  }, [repeatPasscode]);

  useEffect(() => {
    if (repeatPasscode.length === 4) {
      if (passcode !== repeatPasscode) {
        setPasscode('');
        setRepeatPasscode('');
        setView('SetPasscode');
      } else {
        savePasscode(passcode);
        setView('SetPasscode');
        setPasscode('');
        setRepeatPasscode('');
        setValueLength(0);
        (params as any)?.onSuccess();
      }
    }
  }, [repeatPasscode, passcode, goBack, params]);

  return {
    onRepeatPasscodePress,
    onPasscodePress,
    valueLength,
    view,
  };
};
