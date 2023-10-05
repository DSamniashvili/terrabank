import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { StackNavigationOptions } from '@react-navigation/stack';

export const hideHeader: StackNavigationOptions = {
  headerShown: false,
};

export const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: '#a0226d',
  tabBarInactiveTintColor: '#777c8b',
};
