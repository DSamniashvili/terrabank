import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';
import { useTranslation } from 'react-i18next';
import { TRANSACTIONS_SCREEN } from 'navigation/ScreenNames';

export type TransactionsStackParamList = {
  TransactionsScreen: undefined;
};

const Stack = createStackNavigator<TransactionsStackParamList>();

const TransactionsStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={TRANSACTIONS_SCREEN}>
      <Screen
        name={TRANSACTIONS_SCREEN}
        component={HomeScreen}
        options={{
          title: t('common:navigation.transactions'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default TransactionsStack;
