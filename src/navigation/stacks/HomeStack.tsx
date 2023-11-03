import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'screens';
import { HOME_SCREEN } from 'navigation/ScreenNames';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName={HOME_SCREEN}>
      <Screen name={HOME_SCREEN} component={Home} options={{ headerShown: false }} />
    </Navigator>
  );
};
