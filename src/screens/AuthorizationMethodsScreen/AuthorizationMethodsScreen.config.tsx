import { ChatBubble, DialPad, FaceIdSvg, FingerPrintIcon } from 'assets/SVGs';
import { Platform } from 'react-native';
import { AuthorizationMethodType } from './AuthorizationMethodsScreen.types';

export const AuthorizationMethodsScreenOptions: AuthorizationMethodType[] = [
  {
    name: 'settings.sms_code_title',
    description: 'settings.sms_code_desc',
    icon: ChatBubble,
  },
  {
    name: 'settings.passcode_title',
    description: 'settings.passcode_desc',
    icon: DialPad,
  },
  ...(Platform.OS === 'ios'
    ? [
        {
          name: 'settings.face_id_title',
          description: 'settings.face_id_desc',
          icon: FaceIdSvg,
        },
      ]
    : Platform.OS === 'android'
    ? [
        {
          name: 'settings.biometric_title',
          description: 'settingsbiometric_desc',
          icon: FingerPrintIcon,
        },
      ]
    : []),
];
