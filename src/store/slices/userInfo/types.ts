export type UserInfoStateProps = {
  accessToken: string;
  refreshToken: string;
  authorizationMethods: AuthorizationMethodsType;
};

export type AuthorizationMethodsPayload = {
  key: keyof AuthorizationMethodsType;
  value: boolean;
};

export type AuthorizationMethodsType = {
  sms?: boolean;
  passcode?: boolean;
  faceId?: boolean;
  fingerPrint?: boolean;
};
