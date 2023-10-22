import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from 'screens';
import { useTranslation } from 'react-i18next';
import { ALL_TEMPLATES_SCREEN, DASHBOARD_SCREEN } from 'navigation/ScreenNames';
import { AllTemplatesScreen } from 'screens/AllTemplatesScreen/AllTemplatesScreen';
import { DashboardStackParamsList } from 'navigation/types';

const Stack = createStackNavigator<DashboardStackParamsList>();

//  TODO - create a header map !!

export const DashboardStack = () => {
  const { Navigator, Screen } = Stack;
  const { t } = useTranslation();
  return (
    <Navigator initialRouteName={DASHBOARD_SCREEN}>
      <Screen
        name={DASHBOARD_SCREEN}
        component={DashboardScreen}
        options={{
          title: t('common:navigation.hello'),
          headerTitleAlign: 'left',
        }}
      />
      <Screen name={ALL_TEMPLATES_SCREEN} component={AllTemplatesScreen} />
    </Navigator>
  );
};
