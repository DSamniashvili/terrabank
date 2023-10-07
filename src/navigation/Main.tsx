import React, { useEffect } from 'react';
import { Example } from 'screens';
import { createStackNavigator } from '@react-navigation/stack';
import { openToast } from 'utils/toast';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  useEffect(() => {
    openToast('This is a success', 'success');
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Example} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
