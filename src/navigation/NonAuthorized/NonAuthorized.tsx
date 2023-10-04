import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Auth from '../../screens/Auth/Auth';
import { authStackScreenOptions } from './config';

/**
 * Before auth navigation components.
 */
const BeforeAuthMainStack = createNativeStackNavigator();

const MainStackBeforeAuthNavigator = () => {
  return (
    <BeforeAuthMainStack.Navigator initialRouteName="Auth" screenOptions={authStackScreenOptions}>
      <BeforeAuthMainStack.Screen component={Auth} name="Auth" />
    </BeforeAuthMainStack.Navigator>
  );
};

export default MainStackBeforeAuthNavigator;
