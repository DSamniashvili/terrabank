import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';
import { Colors } from 'theme/Variables';

export const hideHeader: StackNavigationOptions = {
  headerShown: false,
};

export const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.inactiveTint,
};
