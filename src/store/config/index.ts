import { reduxStorage } from 'store/reduxStorage';

export const authorizationMethodsPersistConfig = {
  key: 'authorizationMethods',
  storage: reduxStorage,
  whitelist: ['sms', 'passcode', 'faceId', 'biometric'],
};

export const themePersistConfig = {
  key: 'theme',
  storage: reduxStorage,
  whitelist: ['theme', 'darkMode'],
};

export const userInfoPersistConfig = {
  key: 'userInfo',
  storage: reduxStorage,
  whitelist: ['accessToken', 'refreshToken'],
};
export const dashboardPersistConfig = {
  key: 'dashboard',
  storage: reduxStorage,
  whitelist: ['templates', 'transactions', 'liabilities'],
};
