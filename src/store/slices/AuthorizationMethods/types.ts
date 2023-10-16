export type AuthorizationMethodsState = {
  sms?: boolean;
  passcode?: boolean;
  faceId?: boolean;
  biometric?: boolean;
};

export type AuthorizationMethodsPayload = {
  key: keyof AuthorizationMethodsState;
  value: boolean;
};
