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

// logout
export type LogoutAPIResponseType = {};
export type LogoutAPIRequestType = {};

export type GetUserInfoAPIRequestType = {
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
