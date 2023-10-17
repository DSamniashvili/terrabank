import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen, CreatePasscodeScreen } from 'screens';
import {
  PROFILE_SCREEN,
  AUTHORIZATION_METHODS_SCREEN,
  SETTINGS_STACK,
  CREATE_PASSCODE_SCREEN,
} from 'navigation/ScreenNames';

import { ProfileStackParamsList } from 'navigation/types';
import { CustomHeader } from 'components/index';
import { CustomHeaderOptions } from 'components/CustomHeader/CustomHeader.types';
import { SettingsStackNavigator } from './SettingsStack';
import { hideHeader } from 'navigation/config';

const ProfileStack = createStackNavigator<ProfileStackParamsList>();

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
  [CREATE_PASSCODE_SCREEN]: (props: CustomHeaderOptions) => {
    return <CustomHeader title={'Passcode'} backElement={{ position: 'left' }} {...props} />;
  },
};

export const ProfileNavigator = () => {
  const { Navigator, Screen } = ProfileStack;
  return (
    <Navigator initialRouteName={PROFILE_SCREEN}>
      <Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{ header: ProfileStackHeaderMap[PROFILE_SCREEN] }}
      />
      <Screen name={SETTINGS_STACK} component={SettingsStackNavigator} options={hideHeader} />
      <Screen
        name={CREATE_PASSCODE_SCREEN}
        component={CreatePasscodeScreen}
        options={{ header: ProfileStackHeaderMap[CREATE_PASSCODE_SCREEN] }}
      />
    </Navigator>
  );
};
