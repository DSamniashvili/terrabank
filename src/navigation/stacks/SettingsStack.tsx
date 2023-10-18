import { createStackNavigator } from '@react-navigation/stack';
import { CustomHeader } from 'components/CustomHeader';
import { CustomHeaderOptions } from 'components/CustomHeader/CustomHeader.types';
import { AUTHORIZATION_METHODS_SCREEN, SETTINGS_SCREEN } from 'navigation/ScreenNames';
import { SettingsStackParamsList } from 'navigation/types';
import React from 'react';
import { SettingsScreen } from 'screens';

import { AuthorizationMethodsScreen } from 'screens/AuthorizationMethodsScreen/AuthorizationMethodsScreen';

const SettingsStack = createStackNavigator<SettingsStackParamsList>();

const SettingsStackHeaderMap = {
  [SETTINGS_SCREEN]: (props: CustomHeaderOptions) => {
    return (
      <CustomHeader title={'navigation.settings'} backElement={{ position: 'left' }} {...props} />
    );
  },
  [AUTHORIZATION_METHODS_SCREEN]: (props: CustomHeaderOptions) => {
    return (
      <CustomHeader
        title={'settings.choose_authorization_method'}
        backElement={{ position: 'left' }}
        customHeaderContainerStyle={{
          backgroundColor: '#fff',
        }}
        bottomBorder
        {...props}
      />
    );
  },
};

export const SettingsStackNavigator = () => {
  const { Navigator, Screen } = SettingsStack;
  return (
    <Navigator>
      <Screen
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ header: SettingsStackHeaderMap[SETTINGS_SCREEN] }}
      />
      <Screen
        name={AUTHORIZATION_METHODS_SCREEN}
        component={AuthorizationMethodsScreen}
        options={{ header: SettingsStackHeaderMap[AUTHORIZATION_METHODS_SCREEN] }}
      />
    </Navigator>
  );
};
