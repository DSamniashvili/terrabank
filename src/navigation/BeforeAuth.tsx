import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Auth from 'screens/Auth/Auth';
import { hideHeader } from './config';

export type BeforeAuthStackParamList = {
  Auth: undefined;
};

const Stack = createStackNavigator<BeforeAuthStackParamList>();

const MainStackBeforeAuthNavigator = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName="Auth" screenOptions={hideHeader}>
      <Screen component={Auth} name="Auth" />
    </Navigator>
  );
};

export default MainStackBeforeAuthNavigator;
