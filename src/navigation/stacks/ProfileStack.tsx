import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="ProfileScreen">
      <Screen
        name="ProfileScreen"
        component={HomeScreen}
        options={{
          title: 'მეტი',
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default ProfileStack;
