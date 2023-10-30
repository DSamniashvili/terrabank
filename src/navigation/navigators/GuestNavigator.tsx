import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  OnboardingScreen,
  PasscodeLoginScreen,
  PasswordLoginScreen,
  PasswordOnlyLoginScreen,
} from 'screens';
import { guestNavOptions } from 'navigation/config';
import { GuestStackParamList } from 'navigation/types';
import {
  ONBOARDING_SCREEN,
  PASSWORD_LOGIN_SCREEN,
  PASSCODE_LOGIN_SCREEN,
  PASSWORD_ONLY_LOGIN_SCREEN,
} from '../ScreenNames';
import { useBootstrapApp } from 'hooks/useBootstrapApp';
import { logAllKeychainValues } from 'utils/logKeychainValues';

const Stack = createStackNavigator<GuestStackParamList>();

export const GuestNavigator = () => {
  const { Navigator, Screen } = Stack;
  const { loading, savedPasscode, isFirstLaunch, userName } = useBootstrapApp();

  if (loading) {
    return null;
  }

  let initialRoute: keyof GuestStackParamList = PASSWORD_LOGIN_SCREEN;
  // eslint-disable-next-lineno-console
  console.warn({ isFirstLaunch, savedPasscode, userName });

  if (isFirstLaunch) {
    initialRoute = ONBOARDING_SCREEN;
  } else if (savedPasscode) {
    initialRoute = PASSCODE_LOGIN_SCREEN;
  } else if (userName) {
    initialRoute = PASSWORD_ONLY_LOGIN_SCREEN;
  }

  //   TODO TEMp!
  logAllKeychainValues();

  return (
    <Navigator initialRouteName={initialRoute} screenOptions={guestNavOptions}>
      <Screen component={OnboardingScreen} name={ONBOARDING_SCREEN} />
      <Screen component={PasswordLoginScreen} name={PASSWORD_LOGIN_SCREEN} />
      <Screen component={PasswordOnlyLoginScreen} name={PASSWORD_ONLY_LOGIN_SCREEN} />
      <Screen component={PasscodeLoginScreen} name={PASSCODE_LOGIN_SCREEN} />
    </Navigator>
  );
};
