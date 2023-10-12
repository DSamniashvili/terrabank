import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PASSCODE_LOGIN_SCREEN } from 'navigation/ScreenNames';
import PinKeyboard from 'components/PinKeyboard/PinKeyboard';

interface PassCodeLoginBaseProps {
  handleNavigation?: () => Promise<void>;
}

const PassCodeLoginBase: FC<PassCodeLoginBaseProps> = () => {
  return (
    <SafeAreaView>
      <View>
        <PinKeyboard onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export const PassCodeLogin = withLoginScreen<PassCodeLoginBaseProps, typeof PASSCODE_LOGIN_SCREEN>(
  PassCodeLoginBase,
  PASSCODE_LOGIN_SCREEN,
);
