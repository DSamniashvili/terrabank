import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from 'screens/HomeScreens';

export type PaymentsStackParamList = {
  PaymentsScreen: undefined;
};

const Stack = createStackNavigator<PaymentsStackParamList>();

const PaymentsStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName="PaymentsScreen">
      <Screen
        name="PaymentsScreen"
        component={HomeScreen}
        options={{
          title: 'გადახდები',
          headerTitleAlign: 'left',
        }}
      />
    </Navigator>
  );
};

export default PaymentsStack;
