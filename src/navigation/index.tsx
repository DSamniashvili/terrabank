import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import AfterAuthStackNavigator from './AfterAuth';
import useTheme from 'hooks/useTheme';

const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const { NavigationTheme } = useTheme();

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <AfterAuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
