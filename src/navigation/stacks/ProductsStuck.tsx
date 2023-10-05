import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';

export type ProductsStackParamList = {
  ProductsScreen: undefined;
};

const Stack = createStackNavigator<ProductsStackParamList>();

const ProductsStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="ProductsScreen">
      <Screen
        name="ProductsScreen"
        component={HomeScreen}
        options={{
          title: 'პროდუქტები',
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default ProductsStack;
