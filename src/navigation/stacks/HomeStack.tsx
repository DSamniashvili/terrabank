import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';
import { useTranslation } from 'react-i18next';
import { HOME_SCREEN } from 'navigation/ScreenNames';

export type HomeStackParamList = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={HOME_SCREEN}>
      <Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          title: t('common:navigation.hello'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
