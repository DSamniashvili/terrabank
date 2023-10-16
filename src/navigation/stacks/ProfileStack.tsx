import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen, SettingsScreen } from 'screens';
import {
  AUTHORIZATION_METHODS_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from 'navigation/ScreenNames';
import { ProfileStackParamsList } from 'navigation/types';
import { CustomHeader } from 'components/index';
import { CustomHeaderOptions } from 'components/CustomHeader/CustomHeader.types';
import { AuthorizationMethodsScreen } from 'screens/AuthorizationMethodsScreen/AuthorizationMethodsScreen';

const Stack = createStackNavigator<ProfileStackParamsList>();

const ProfileStackHeaderMap = {
  [PROFILE_SCREEN]: ({ options: { title } }: CustomHeaderOptions) => {
    return (
      <CustomHeader
        title={title}
        isInitialScreen
        titlePosition={'left'}
        searchElement={{ position: 'right' }}
        notificationsElement={{ position: 'right' }}
      />
    );
  },
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

export const ProfileStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <Navigator initialRouteName={PROFILE_SCREEN}>
      <Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ header: ProfileStackHeaderMap[PROFILE_SCREEN] }}
      />
      <Screen
        name={SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{ header: ProfileStackHeaderMap[SETTINGS_SCREEN] }}
      />
      <Screen
        name={AUTHORIZATION_METHODS_SCREEN}
        component={AuthorizationMethodsScreen}
        options={{ header: ProfileStackHeaderMap[AUTHORIZATION_METHODS_SCREEN] }}
      />
    </Navigator>
  );
};
