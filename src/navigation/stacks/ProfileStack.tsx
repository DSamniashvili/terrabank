import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import { PROFILE_SCREEN } from 'navigation/ScreenNames';

export type ProfileStackParamList = {
  ProfileScreen: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={PROFILE_SCREEN}>
      <Screen
        name={PROFILE_SCREEN}
        component={HomeScreen}
        options={{
          title: t('common:navigation.more'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};
