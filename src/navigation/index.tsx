import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { MainNavigator } from './navigators/MainNavigator';
import useTheme from 'hooks/useTheme';
import { GuestNavigator } from './navigators/GuestNavigator';
import { useBootstrapApp } from 'hooks';

export const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const { NavigationTheme } = useTheme();
  const { isAuth } = useBootstrapApp();

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      {isAuth ? <MainNavigator /> : <GuestNavigator />}
    </NavigationContainer>
  );
};
