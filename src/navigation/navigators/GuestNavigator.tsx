import React, { useEffect, useState } from 'react';
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
import { setValue, storageKeys } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { useAppSelector } from 'store/hooks/useAppSelector';

const Stack = createStackNavigator<GuestStackParamList>();

export const GuestNavigator = () => {
  const { Navigator, Screen } = Stack;
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const { loginName: userName } = useAppSelector(state => state.userInfo);
  //   const { isPasscodeSet } = usePasscode();

  useEffect(() => {
    if (!storageKeys().includes(APP_LAUNCHED)) {
      setValue(APP_LAUNCHED, true);
      setIsFirstLaunch(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  const initialRoute = !isFirstLaunch
    ? userName
      ? PASSWORD_ONLY_LOGIN_SCREEN
      : PASSWORD_LOGIN_SCREEN
    : ONBOARDING_SCREEN;

  return (
    <Navigator initialRouteName={initialRoute} screenOptions={guestNavOptions}>
      <Screen component={OnboardingScreen} name={ONBOARDING_SCREEN} />
      <Screen component={PasswordLoginScreen} name={PASSWORD_LOGIN_SCREEN} />
      <Screen component={PasswordOnlyLoginScreen} name={PASSWORD_ONLY_LOGIN_SCREEN} />
      <Screen component={PasscodeLoginScreen} name={PASSCODE_LOGIN_SCREEN} />
    </Navigator>
  );
};
