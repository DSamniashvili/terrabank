import React, { FC, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PinKeyboard from 'components/PinKeyboard/PinKeyboard';
import { PinLine } from 'components/PinLine/PinLine';
import { useStyleTheme } from './PasscodeLoginScreen.styles';
import { Account } from 'components/index';
import passcodeEvents, { PASSCODE_EVENTS_PASSCODE_VERIFIED } from 'utils/eventBus';
import { usePasscode } from 'hooks/usePasscode';

interface PassCodeLoginScreenProps {}

export const PasscodeLoginScreen: FC<PassCodeLoginScreenProps> = () => {
  const { watchKeyboard, passcodeLength } = usePasscode();

  const styles = useStyleTheme();

  useEffect(() => {
    return () => {
      passcodeEvents.off(PASSCODE_EVENTS_PASSCODE_VERIFIED);
    };
  }, []);
  return (
    <SafeAreaView style={styles.loginScreenContainerStyle}>
      <View style={styles.wrapper}>
        <Account user="Slick Studio" />
        <Button.Secondary text="მომხმარებლის შეცვლა" size="medium" onPress={() => {}} />
        <PinLine fillNumber={passcodeLength} style={styles.pinLine} />
      </View>
      <PinKeyboard onPress={watchKeyboard} />
    </SafeAreaView>
  );
};
