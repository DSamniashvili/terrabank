export type UserInfoStateProps = {
  accessToken: string;
  refreshToken: string;
  authorizationMethods: SupportedAuthMethodsType;
  ignoreEasyLogin: boolean;
  postponeEasyLogin: boolean;
  isDeviceTrusted: boolean;
};

export type AuthorizationMethodsPayload = {
  key: keyof SupportedAuthMethodsType;
  value: boolean;
};

export type SupportedAuthMethodsType = {
  sms?: boolean;
  passcode?: boolean;
  faceId?: boolean;
  fingerPrint?: boolean;
};
