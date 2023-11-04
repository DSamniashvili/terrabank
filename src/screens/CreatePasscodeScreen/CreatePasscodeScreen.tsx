import React from 'react';
import { SafeAreaView } from 'react-native';
import { PasscodeInput } from 'components/PasscodeInput/PasscodeInput';
import { useStyleTheme } from './CreatePasscodeScreen.styles';
import { useCreatePasscode } from './useCreatePasscode';

export const CreatePasscodeScreen = () => {
  const styles = useStyleTheme();
  const { onRepeatPasscodePress, onPasscodePress, valueLength, view } = useCreatePasscode();

  return (
    <>
      <SafeAreaView style={styles.container}>
        {view === 'SetPasscode' && (
          <PasscodeInput
            label="passcode.enterPasscodeCode"
            title="passcode.createPasscode"
            onPasscodeChange={onPasscodePress}
            valueLength={valueLength}
          />
        )}
        {view === 'RepeatPasscode' && (
          <PasscodeInput
            label="passcode.enterPasscodeCode"
            onPasscodeChange={onRepeatPasscodePress}
            title="passcode.repeatPasscode"
            valueLength={valueLength}
          />
        )}
      </SafeAreaView>
    </>
  );
};
