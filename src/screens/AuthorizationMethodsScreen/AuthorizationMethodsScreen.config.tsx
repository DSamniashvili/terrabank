import { ChatBubble, DialPad, FaceIdSvg, FingerPrintIcon } from 'assets/SVGs';
import { Platform } from 'react-native';
import { AuthorizationMethodType } from './AuthorizationMethodsScreen.types';

export const AuthorizationMethodsScreenOptions: AuthorizationMethodType[] = [
  {
    methodName: 'sms',
    title: 'settings.sms_code_title',
    description: 'settings.sms_code_desc',
    icon: ChatBubble,
  },
  {
    methodName: 'passcode',
    title: 'settings.passcode_title',
    description: 'settings.passcode_desc',
    icon: DialPad,
  },
  ...(Platform.OS === 'ios'
    ? [
        {
          methodName: 'faceId',
          title: 'settings.face_id_title',
          description: 'settings.face_id_desc',
          icon: FaceIdSvg,
        },
      ]
    : Platform.OS === 'android'
    ? [
        {
          methodName: 'biometric',
          title: 'settings.biometric_title',
          description: 'settingsbiometric_desc',
          icon: FingerPrintIcon,
        },
      ]
    : []),
];
