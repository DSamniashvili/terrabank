import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'გამარჯობა',
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
