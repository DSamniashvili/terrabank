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

export type AddTrustedDeviceAPIResponseType = {
  accessToken: string | null;
  refreshToken: string | null;
  deviceToken: string;
  success: boolean;
  error: any;
  pending: boolean;
  channelData: any;
};

export type AddTrustedDeviceAPIRequestType = {
  otp?: string;
  Passcode?: string;
  headers?: Record<string, any>;
};

// logout
export type LogoutAPIResponseType = {};
export type LogoutAPIRequestType = {};

// getTrustedDevices
export type GetTrustedDevicesAPIResponseType = {};

export type GetTrustedDevicesAPIRequestType = {
  headers?: Record<string, any>;
};

export type GetUserInfoAPIResponseType = {
  loginName: string | null;
  customerId: number;
  personalId: string | null;
  firstName: string;
  firstNameEng: string;
  lastName: string;
  lastNameEng: string;
  mobile: string | null;
  email: string | null;
  address: string;
  addressEng: string;
  addressJuridical: string;
  addressJuridicalEng: string;
  imageId: string;
  authType: number;
  packageType: number;
  showZeroAccounts: boolean;
  hasDigipass: boolean;
  isPensionGranted: boolean;
  isAdult: boolean;
  showPension: boolean;
  mustChangePassword: boolean;
  passwordExpired: boolean;
  createdAutomatically: boolean;
  secretWord: string;
};
