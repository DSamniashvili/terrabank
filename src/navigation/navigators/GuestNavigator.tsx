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
import { useKeyChain } from 'hooks/useKeychain';

const Stack = createStackNavigator<GuestStackParamList>();

export const GuestNavigator = () => {
  const { Navigator, Screen } = Stack;
  const { loading, isFirstLaunch } = useBootstrapApp();
  const { savedPasscode, savedUserName } = useKeyChain();

  if (loading) {
    return null;
  }

  let initialRoute: keyof GuestStackParamList = PASSWORD_LOGIN_SCREEN;
  // eslint-disable-next-lineno-console
  //   console.log({ isFirstLaunch, savedPasscode, userName });

  if (isFirstLaunch) {
    initialRoute = ONBOARDING_SCREEN;
  } else if (savedPasscode) {
    initialRoute = PASSCODE_LOGIN_SCREEN;
  } else if (savedUserName) {
    initialRoute = PASSWORD_ONLY_LOGIN_SCREEN;
  }

  //   TODO TEMp!
  //   logAllKeychainValues();
  //   clearrAllKeyChainValues();
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
