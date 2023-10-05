import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack, PaymentsStack, TransactionsStack, ProductsStack, ProfileStack } from './stacks';
import { hideHeader, tabOptions } from './config';
import { View } from 'react-native';

export type AfterAuthStackParamList = {
  Initial: undefined;
};

export type TabParamList = {
  Home: undefined;
  Products: undefined;
  Transactions: undefined;
  Payments: undefined;
  Profile: undefined;
};

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
const Stack = createStackNavigator<AfterAuthStackParamList>();

const TabNavigator = () => {
  const { Navigator, Screen } = Tab;

  return (
    <Navigator screenOptions={tabOptions}>
      <Screen name="Home" component={HomeStack} options={{ title: 'მთავარი' }} />
      <Screen name="Products" component={ProductsStack} options={{ title: 'პროდუქტები' }} />
      <Screen
        name="Transactions"
        component={TransactionsStack}
        options={{
          title: '',
          tabBarIcon: transactionsIcon,
        }}
      />
      <Screen name="Payments" component={PaymentsStack} options={{ title: 'გადახდები' }} />
      <Screen name="Profile" component={ProfileStack} options={{ title: 'მეტი' }} />
    </Navigator>
  );
};

const AfterAuthStackNavigator = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName="Initial" screenOptions={hideHeader}>
      <Screen name="Initial" component={TabNavigator} options={hideHeader} />
    </Navigator>
  );
};

export default AfterAuthStackNavigator;
