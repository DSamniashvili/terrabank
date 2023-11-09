import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AllAcountsAndCardsScreen, ProductsScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import { ALL_ACCOUNTS_AND_CARDS_SCREEN, PRODUCTS_SCREEN } from 'navigation/ScreenNames';
import { Colors } from 'theme/Variables';
import useTheme from 'hooks/useTheme';

export type ProductsStackParamList = {
  ProductsScreen: undefined;
  [ALL_ACCOUNTS_AND_CARDS_SCREEN]: undefined;
};

const Stack = createStackNavigator<ProductsStackParamList>();

export const ProductsStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  const { FontFamily } = useTheme();
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
    </Navigator>
  );
};
