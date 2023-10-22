import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import { HOME_SCREEN } from 'navigation/ScreenNames';

export type DashboardStackParamList = {
  DashboardScreen: undefined;
};

const Stack = createStackNavigator<DashboardStackParamList>();

export const DashboardStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={HOME_SCREEN}>
      <Screen
        name={HOME_SCREEN}
        component={DashboardScreen}
        options={{
          title: t('common:navigation.hello'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};
