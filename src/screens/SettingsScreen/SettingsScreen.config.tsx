import {
  Asterisks,
  Email,
  Key,
  NotificationsManage,
  Shield,
  SmartPhoneChecked,
  UserIcon,
} from 'assets/SVGs';
import { SettingsConfigType } from './SettingsScreen.types';

export const SettingsScreenConfig: SettingsConfigType[] = [
  {
    title: 'settings.personal_info',
    subContent: [
      {
        title: 'settings.edit_user',
        icon: UserIcon,
        navigateTo: 'AuthorizationMethodsScreen',
      },
      {
        title: 'settings.email',
        icon: Email,
        navigateTo: 'AuthorizationMethodsScreen',
      },
    ],
  },
  {
    title: 'settings.security_settings',
    subContent: [
      {
        title: 'settings.change_password',
        icon: Key,
        navigateTo: 'AuthorizationMethodsScreen',
      },
      {
        title: 'settings.change_code_word',
        icon: Asterisks,
        navigateTo: 'AuthorizationMethodsScreen',
      },
      {
        title: 'settings.security_level',
        icon: Shield,
        navigateTo: 'AuthorizationMethodsScreen',
      },
      {
        title: 'settings.trusted_devices',
        icon: SmartPhoneChecked,
        navigateTo: 'AuthorizationMethodsScreen',
      },
    ],
  },
  {
    title: 'settings.additional_settings',
    subContent: [
      {
        title: 'settings.manage_notifications',
        icon: NotificationsManage,
        navigateTo: 'AuthorizationMethodsScreen',
      },
    ],
  },
];
