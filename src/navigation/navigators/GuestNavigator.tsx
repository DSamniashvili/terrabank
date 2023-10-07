import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Auth } from 'screens';
import { hideHeader } from 'navigation/config';
import { GuestStackParamList } from 'navigation/types';

const Stack = createStackNavigator<GuestStackParamList>();

export const GuestNavigator = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName="Auth" screenOptions={hideHeader}>
      <Screen component={Auth} name="Auth" />
    </Navigator>
  );
};
