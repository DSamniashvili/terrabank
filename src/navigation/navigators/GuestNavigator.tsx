import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen, PassCodeLoginScreen, PasswordLoginScreen } from 'screens';
import { guestNavOptions } from 'navigation/config';
import { GuestStackParamList } from 'navigation/types';
import { ONBOARDING_SCREEN, PASSWORD_LOGIN_SCREEN, PASSCODE_LOGIN_SCREEN } from '../ScreenNames';
import { setValue, storageKeys } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';

const Stack = createStackNavigator<GuestStackParamList>();

export const GuestNavigator = () => {
  const { Navigator, Screen } = Stack;
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

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

  return (
    <Navigator
      initialRouteName={isFirstLaunch ? ONBOARDING_SCREEN : PASSWORD_LOGIN_SCREEN}
      screenOptions={guestNavOptions}
    >
      <Screen component={OnboardingScreen} name={ONBOARDING_SCREEN} />
      <Screen component={PasswordLoginScreen} name={PASSWORD_LOGIN_SCREEN} />
      <Screen component={PassCodeLoginScreen} name={PASSCODE_LOGIN_SCREEN} />
    </Navigator>
  );
};
