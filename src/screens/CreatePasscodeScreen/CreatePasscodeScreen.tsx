import React from 'react';
import { SafeAreaView } from 'react-native';
import { PasscodeInput } from 'components/PasscodeInput/PasscodeInput';
import { useStyleTheme } from './CreatePasscodeScreen.styles';
import { useCreatePasscode } from './hooks/useCreatePasscode';

export const CreatePasscodeScreen = () => {
  const styles = useStyleTheme();
  const { onRepeatPasscodePress, onPasscodePress, valueLength, view } = useCreatePasscode();

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
