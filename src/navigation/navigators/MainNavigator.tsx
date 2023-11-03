import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeStack,
  PaymentsStack,
  TransactionsStack,
  ProductsStack,
  ProfileStack,
} from 'navigation/stacks';
import { HOME, INITIAL, PAYMENTS, PRODUCTS, PROFILE, TRANSACTIONS } from 'navigation/ScreenNames';
import { hideHeader, tabOptions } from 'navigation/config';
import { MainStackParamsList, TabParamList } from 'navigation/types';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setShouldCloseCards } from 'store/slices/Dashboard';

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
  const dispatch = useAppDispatch();

  return (
    <Navigator screenOptions={tabOptions}>
      <Screen
        name={HOME}
        component={HomeStack}
        options={{ title: t('common:navigation.home') }}
        listeners={({ navigation }) => ({
          tabPress: () => {
            const { isFocused, state, goBack } = navigation;
            if (isFocused()) {
              if (navigation.canGoBack()) {
                for (let i = 0; i < state.routes.length - 1; i += 1) {
                  goBack();
                }
              } else {
                dispatch(setShouldCloseCards(true));
              }
            } else {
              navigation.navigate(HOME);
            }
          },
        })}
      />
      <Screen
        name={PRODUCTS}
        component={ProductsStack}
        options={{ title: t('common:navigation.products') }}
      />
      <Screen
        name={TRANSACTIONS}
        component={TransactionsStack}
        options={{
          title: '',
          tabBarIcon: transactionsIcon,
        }}
      />
      <Screen
        name={PAYMENTS}
        component={PaymentsStack}
        options={{ title: t('common:navigation.payments') }}
      />
      <Screen
        name={PROFILE}
        component={ProfileStack}
        options={{ title: t('common:navigation.more') }}
      />
    </Navigator>
  );
};

export const MainNavigator = () => {
  const { Navigator, Screen } = Stack;

  return (
    <Navigator initialRouteName={INITIAL} screenOptions={hideHeader}>
      <Screen name={INITIAL} component={TabNavigator} options={hideHeader} />
    </Navigator>
  );
};
