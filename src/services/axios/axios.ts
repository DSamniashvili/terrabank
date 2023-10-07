import axios from 'axios';
import { BackHandler } from 'react-native';
import { config } from 'utils/config';
import { onBackButtonPressAndroid, responseMiddleware, requestMiddleware } from './helpers';

BackHandler.addEventListener('hardwareBackPress', onBackButtonPressAndroid);

const axiosInstance = axios.create({
  baseURL: `${config.domain}`,
});

axiosInstance.interceptors.request.use(requestMiddleware.onFulfilled, requestMiddleware.onRejected);

axiosInstance.interceptors.response.use(responseMiddleware.onFulfilled, async e => {
  const originalRequest = await responseMiddleware.onRejected(e);
  if (originalRequest instanceof Promise) {
    return originalRequest;
  } else {
    return axiosInstance(originalRequest.req);
  }
});

export default axiosInstance;
