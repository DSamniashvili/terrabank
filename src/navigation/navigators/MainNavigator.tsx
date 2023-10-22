import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DashboardStack,
  PaymentsStack,
  TransactionsStack,
  ProductsStack,
  ProfileNavigator,
} from 'navigation/stacks';
import {
  HOME_STACK,
  INITIAL_STACK,
  PAYMENTS_STACK,
  PRODUCTS_STACK,
  PROFILE_STACK,
  TRANSACTIONS_STACK,
} from 'navigation/ScreenNames';
import { hideHeader, tabOptions } from 'navigation/config';
import { MainStackParamsList, TabParamList } from 'navigation/types';

const transactionsIcon = () => (
  <View
    style={{
      width: 40,
      height: 40,
      marginTop: 20,
      borderRadius: 20,
      backgroundColor: '#f9f1f6',
    }}
  />
);

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<MainStackParamsList>();

const TabNavigator = () => {
  const { Navigator, Screen } = Tab;
  const { t } = useTranslation();

  return (
    <Navigator screenOptions={tabOptions}>
      <Screen
        name={HOME_STACK}
        component={DashboardStack}
        options={{ title: t('common:navigation.home') }}
      />
      <Screen
        name={PRODUCTS_STACK}
        component={ProductsStack}
        options={{ title: t('common:navigation.products') }}
      />
      <Screen
        name={TRANSACTIONS_STACK}
        component={TransactionsStack}
        options={{
          title: '',
          tabBarIcon: transactionsIcon,
        }}
      />
      <Screen
        name={PAYMENTS_STACK}
        component={PaymentsStack}
        options={{ title: t('common:navigation.payments') }}
      />
      <Screen
        name={PROFILE_STACK}
        component={ProfileNavigator}
        options={{ title: t('common:navigation.more') }}
      />
    </Navigator>
  );
};

export const MainNavigator = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName={INITIAL_STACK} screenOptions={hideHeader}>
      <Screen name={INITIAL_STACK} component={TabNavigator} options={hideHeader} />
    </Navigator>
  );
};
