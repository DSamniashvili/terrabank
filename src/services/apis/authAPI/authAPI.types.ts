export type LoginAPIResponseType = {
  accessToken: string | null;
  authContext?: any;
  authMethod: string;
  authorized: boolean;
  blocked: boolean;
  channelData: any;
  error: any;
  hasDigipass: boolean;
  isAdult: boolean;
  isSelect: boolean;
  mustChangePassword: boolean;
  otpRequired: boolean;
  pending: boolean;
  refreshToken: string | null;
  success: boolean;
};

export type LoginAPIRequestType = {
  loginName: string;
  password: string;
  headers?: Record<string, any>;
};

export type AddTrustedDeviceAPIResponseType = {};
export type AddTrustedDeviceAPIRequestType = {};
