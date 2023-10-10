import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen, PassCodeLogin, PasswordLogin } from 'screens';
import { hideHeader } from 'navigation/config';
import { GuestStackParamList } from 'navigation/types';
import { ONBOARDING_SCREEN, PASSWORD_LOGIN_SCREEN, PASSCODE_LOGIN_SCREEN } from '../ScreenNames';

const Stack = createStackNavigator<GuestStackParamList>();

export const GuestNavigator = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName={ONBOARDING_SCREEN} screenOptions={hideHeader}>
      <Screen component={OnboardingScreen} name={ONBOARDING_SCREEN} />
      <Screen component={PasswordLogin} name={PASSWORD_LOGIN_SCREEN} />
      <Screen component={PassCodeLogin} name={PASSCODE_LOGIN_SCREEN} />
    </Navigator>
  );
};
