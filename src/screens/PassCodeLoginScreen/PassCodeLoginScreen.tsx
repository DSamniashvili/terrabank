import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Button } from 'components/Button/Button';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PASSCODE_LOGIN_SCREEN } from 'navigation/ScreenNames';
import PinKeyboard from 'components/PinKeyboard/PinKeyboard';
import { PinLine } from 'components/PinLine/PinLine';
import { useStyleTheme } from './PassCodeLoginScreen.styles';
import { Account } from 'components/index';
import { usePasscodeLogin } from './usePasscodeLogin';

interface PassCodeLoginBaseProps {
  handleNavigation?: () => Promise<void>;
}

const PassCodeLoginScreenBase: FC<PassCodeLoginBaseProps> = () => {
  const { watchKeyboard, passcodeLength } = usePasscodeLogin();

  const styles = useStyleTheme();

  return (
    <SafeAreaView style={styles.loginScreenContainerStyle}>
      <View style={styles.wrapper}>
        <Account user="Slick Studio" />
        <Button.Secondary text="მომხმარებლის შეცვლა" size="medium" />
        <PinLine fillNumber={passcodeLength} style={styles.pinLine} />
      </View>
      <PinKeyboard onPress={watchKeyboard} />
    </SafeAreaView>
  );
};

export const PassCodeLoginScreen = withLoginScreen<
  PassCodeLoginBaseProps,
  typeof PASSCODE_LOGIN_SCREEN
>(PassCodeLoginScreenBase, PASSCODE_LOGIN_SCREEN);
