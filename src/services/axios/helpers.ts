import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAccessToken, setAccessToken, setRefreshToken } from 'storage';
import * as services from '../auth';
import { AuthResponse } from 'services/types';

let canNotPressBackButton = false;

/**
 * Disable android back button on requests.
 */
export const onBackButtonPressAndroid = () => {
  return canNotPressBackButton;
};

/**
 * Request middleware.
 */
export const requestMiddleware = {
  onFulfilled: async (request: AxiosRequestConfig) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    request.headers['User-Agent'] = 'terabank';

    return request;
  },
  onRejected: (error: any) => {
    return Promise.reject(error);
  },
};

/**
 * Response middleware.
 */
export const responseMiddleware = {
  onFulfilled: (response: AxiosResponse<any>) => {
    return response.data;
  },
  onRejected: async (error: any) => {
    if (
      error.response.status === 401 &&
      error.response.config.url !== 'auth' &&
      error.response.config.url !== 'auth/refresh'
    ) {
      const { accessToken, refreshToken }: AuthResponse = await services.refreshAuth();
      await setAccessToken(accessToken);
      await setRefreshToken(refreshToken);
      return { req: error.config, refresh: true };
    }

    if (error.response.status === 401 && error.response.config.url === 'auth/refresh') {
      // MMKV here
    }
    const { errorCode } = error.response.data;
    if (errorCode === 'service_exception') {
      //there should be alert error
    }
    return Promise.reject(error);
  },
};
