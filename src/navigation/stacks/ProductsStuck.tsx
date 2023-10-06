import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';
import { useTranslation } from 'react-i18next';
import { PRODUCTS_SCREEN } from 'navigation/ScreenNames';

export type ProductsStackParamList = {
  ProductsScreen: undefined;
};

const Stack = createStackNavigator<ProductsStackParamList>();

const ProductsStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={PRODUCTS_SCREEN}>
      <Screen
        name={PRODUCTS_SCREEN}
        component={HomeScreen}
        options={{
          title: t('common:navigation.products'),
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default ProductsStack;
