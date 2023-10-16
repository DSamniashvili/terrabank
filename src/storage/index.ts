import { MMKV } from 'react-native-mmkv';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants';

export const storage = new MMKV();

// Generic function to set a value in MMKV storage
export const setValue = (key: string, value: string | boolean) => {
  storage.set(key, value);
};

// Generic function to get a value from MMKV storage
export const getValue = (key: string) => {
  return storage.getString(key);
};

export const setAccessToken = (accessToken: string) => {
  storage.set(ACCESS_TOKEN_KEY, accessToken);
};

export const getRefreshToken = () => {
  storage.getString(REFRESH_TOKEN_KEY);
};

export const getAccessToken = () => {
  return storage.getString(ACCESS_TOKEN_KEY);
};

export const setRefreshToken = (refreshToken: string) => {
  storage.set(REFRESH_TOKEN_KEY, refreshToken);
};

export const storageKeys = () => {
  return storage.getAllKeys();
};

export const removeValue = (key: string) => {
  return storage.delete(key);
};
