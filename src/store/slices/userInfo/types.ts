import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { GetUserInfoAPIRequestType } from 'services/apis/authAPI/authAPI.types';

export type UserInfoStateProps = {
  accessToken: string;
  refreshToken: string;
  ignoreEasyLogin: boolean;
  postponeEasyLogin: boolean;
  isDeviceTrusted: boolean;
  userProfileInfo: {
    loading?: any;
    error?: FetchBaseQueryError;
    profileInfo: GetUserInfoAPIRequestType | {};
  };
  isLoggingOut: boolean;
};

export type SupportedAuthMethodsType = {
  passcode?: boolean;
  faceId?: boolean;
  fingerPrint?: boolean;
};
