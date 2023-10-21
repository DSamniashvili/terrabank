import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import TeraBank from './TeraBank';
import OtherBanks from './OtherBanks';
import TabBar from './components/TabBar/TabBar';

const Tab = createMaterialTopTabNavigator();

export const DashboardTabs = () => {
  const { Navigator, Screen } = Tab;

  const customTabBar = (props: MaterialTopTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <Navigator tabBar={customTabBar} screenOptions={{ swipeEnabled: false }}>
      <Screen name="TeraBank" component={TeraBank} options={{ title: 'ტერაბანკი' }} />
      <Screen name="OtherBanks" component={OtherBanks} options={{ title: 'სხვა ბანკები' }} />
    </Navigator>
  );
};