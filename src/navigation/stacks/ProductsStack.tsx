import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import { PRODUCTS_SCREEN } from 'navigation/ScreenNames';

export type ProductsStackParamList = {
  ProductsScreen: undefined;
};

const Stack = createStackNavigator<ProductsStackParamList>();

export const ProductsStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={PRODUCTS_SCREEN}>
      <Screen
        name={PRODUCTS_SCREEN}
        component={ProductsScreen}
        options={{
          title: t('common:navigation.products'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};
