import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import { TRANSACTIONS_SCREEN } from 'navigation/ScreenNames';

export type TransactionsStackParamList = {
  TransactionsScreen: undefined;
};

const Stack = createStackNavigator<TransactionsStackParamList>();

export const TransactionsStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={TRANSACTIONS_SCREEN}>
      <Screen
        name={TRANSACTIONS_SCREEN}
        component={DashboardScreen}
        options={{
          title: t('common:navigation.transactions'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};
