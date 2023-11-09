import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountDetailsScreen, AllAcountsAndCardsScreen, ProductsScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import {
  ACCOUNT_DETAILS_SCREEN,
  ALL_ACCOUNTS_AND_CARDS_SCREEN,
  PRODUCTS_SCREEN,
} from 'navigation/ScreenNames';
import { useTheme } from 'hooks';
import { ProductsStackParamsList } from 'navigation/types';

const Stack = createStackNavigator<ProductsStackParamsList>();

export const ProductsStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  const { FontFamily, Colors } = useTheme();
  return (
    <Navigator initialRouteName={PRODUCTS_SCREEN}>
      <Screen
        name={PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          title: t('common:navigation.products'),
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: Colors.headerBackground,
            shadowColor: 'transparent',
          },
          headerTitleStyle: {
            fontFamily: FontFamily.Regular,
          },
        }}
      />
      <Screen
        name={ALL_ACCOUNTS_AND_CARDS_SCREEN}
        component={AllAcountsAndCardsScreen}
        options={{
          title: t('products.allAccounts'),
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerBackTitle: ' ',
          headerTitleStyle: {
            fontFamily: FontFamily.Regular,
          },
        }}
      />
      <Screen
        name={ACCOUNT_DETAILS_SCREEN}
        component={AccountDetailsScreen}
        options={{
          title: t('products.accountDetails'),
          headerStyle: {
            backgroundColor: Colors.white,
            shadowColor: 'transparent',
          },
          headerBackTitle: ' ',
          headerTitleStyle: {
            fontFamily: FontFamily.Regular,
          },
        }}
      />
    </Navigator>
  );
};
