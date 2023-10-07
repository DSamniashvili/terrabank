import axios from 'axios';
import * as URLS from './urls';
import { getRefreshToken } from 'storage';
import { AuthRequest, AuthResponse, ResetPasswordReq } from './types';

export const auth = ({ username, password }: AuthRequest) =>
  axios.post<AuthRequest, AuthResponse>(URLS.auth, {
    username,
    password,
  });

export const refreshAuth = async () => {
  const refreshToken = await getRefreshToken();
  return axios.post<any, AuthResponse>(URLS.authRefresh, {
    refreshToken,
  });
};

export const twoFactor = (code: string) => axios.put(`auth/verify?code=${code}`);

export const twoFactorOff = (code: string) =>
  axios.put(`security/twofactorauth/disable?code=${code}`);

export const resetPassword = (data: ResetPasswordReq) => axios.patch(URLS.resetPassword, data);

export const verifyMobileOTP = (mobileNumber: string) =>
  axios.post(
    URLS.numberVerifyOtp,
    {},
    {
      params: {
        mobileNumber,
      },
    },
  );
export const verifyMobile = (code: string, mobileNumber: string) =>
  axios.put(
    URLS.numberVerify,
    {
      code,
    },
    {
      params: {
        mobileNumber,
      },
    },
  );
