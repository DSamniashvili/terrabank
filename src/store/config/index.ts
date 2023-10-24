import { reduxStorage } from 'store/reduxStorage';

export const themePersistConfig = {
  key: 'theme',
  storage: reduxStorage,
  whitelist: ['theme', 'darkMode'],
};

export const userInfoPersistConfig = {
  key: 'userInfo',
  storage: reduxStorage,
  whitelist: ['accessToken', 'refreshToken', 'authorizationMethods'],
};
export const dashboardPersistConfig = {
  key: 'dashboard',
  storage: reduxStorage,
  whitelist: ['templates'],
};
