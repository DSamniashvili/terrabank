import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen, SettingsScreen, CreatePasscodeScreen } from 'screens';
import { CREATE_PASSCODE, PROFILE_SCREEN, SETTINGS_SCREEN } from 'navigation/ScreenNames';
import { ProfileStackParamsList } from 'navigation/types';
import { CustomHeader } from 'components/index';
import { CustomHeaderOptions } from 'components/CustomHeader/CustomHeader.types';

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
    return <CustomHeader title={'settings'} backElement={{ position: 'left' }} {...props} />;
  },
  [CREATE_PASSCODE]: (props: CustomHeaderOptions) => {
    return <CustomHeader title={'Passcode'} backElement={{ position: 'left' }} {...props} />;
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
        name={CREATE_PASSCODE}
        component={CreatePasscodeScreen}
        options={{ header: ProfileStackHeaderMap[CREATE_PASSCODE] }}
      />
    </Navigator>
  );
};
