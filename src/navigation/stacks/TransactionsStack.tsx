import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';

export type TransactionsStackParamList = {
  TransactionsScreen: undefined;
};

const Stack = createStackNavigator<TransactionsStackParamList>();

const TransactionsStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="TransactionsScreen">
      <Screen
        name="TransactionsScreen"
        component={HomeScreen}
        options={{
          title: 'გადარიცხვები',
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default TransactionsStack;
