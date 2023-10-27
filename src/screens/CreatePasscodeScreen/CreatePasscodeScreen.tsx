import React from 'react';
import { SafeAreaView } from 'react-native';
import { PasscodeInput } from 'components/PasscodeInput/PasscodeInput';
import { useStyleTheme } from './CreatePasscodeScreen.styles';
import { useCreatePasscode } from './hooks/useCreatePasscode';
import { openToast } from 'utils/toast';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { ProfileStackScreenProps } from 'navigation/types';

export const CreatePasscodeScreen = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation<ProfileStackScreenProps<'CreatePasscodeScreen'>>();

  const successCallBack = () => {
    goBack();
    openToast(t('passcode.device_is_trusted'), 'success');
  };

  const styles = useStyleTheme();
  const { onRepeatPasscodePress, onPasscodePress, valueLength, view } =
    useCreatePasscode(successCallBack);

  return (
    <SafeAreaView style={styles.container}>
      {view === 'SetPasscode' && (
        <PasscodeInput
          title="passcode.setPasscodeTitle"
          label="passcode.setPasscodeDescription"
          onPasscodeChange={onPasscodePress}
          valueLength={valueLength}
        />
      )}
      {view === 'RepeatPasscode' && (
        <PasscodeInput
          title="passcode.repeatPasscodeTitle"
          label="passcode.setPasscodeDescription"
          onPasscodeChange={onRepeatPasscodePress}
          valueLength={valueLength}
        />
      )}
    </SafeAreaView>
  );
};
