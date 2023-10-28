import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import {
  AddTrustedDeviceAPIRequestType,
  AddTrustedDeviceAPIResponseType,
  GetUserInfoAPIRequestType,
  LoginAPIRequestType,
  LoginAPIResponseType,
  LogoutAPIRequestType,
  LogoutAPIResponseType,
} from './authAPI.types';
import { URLS } from 'services/constants/urls';
import { METHOD_NAMES } from 'services/constants';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['Auth'],
  endpoints: builder => ({
    loginUser: builder.mutation<LoginAPIResponseType, LoginAPIRequestType>({
      query: credentials => ({
        url: URLS.login,
        method: METHOD_NAMES.POST,
        body: credentials,
      }),
    }),
    logoutUser: builder.mutation<LogoutAPIResponseType, LogoutAPIRequestType>({
      query: body => ({
        url: URLS.logout,
        method: METHOD_NAMES.POST,
        headers: {
          // TODO - temp!!!

          'X-Bank-UserIp': '1',
          'X-Bank-DeviceToken': '1',
        },
        body: body,
      }),
    }),
    getTrustedDevices: builder.query<any, void>({
      query: () => ({
        url: URLS.getTrustedDevices,
        method: METHOD_NAMES.GET,
        headers: {
          'X-Bank-UserIp': '1',
          'X-Bank-DeviceToken': '1',
        },
      }),
    }),
    addTrustedDevice: builder.mutation<
      AddTrustedDeviceAPIResponseType,
      AddTrustedDeviceAPIRequestType
    >({
      query: () => ({
        url: URLS.addTrustedDevice,
        method: METHOD_NAMES.POST,
        body: {},
      }),
    }),
    getUserProfileInfo: builder.query<GetUserInfoAPIRequestType, void>({
      query: () => ({
        url: URLS.getUserProfile,
        method: METHOD_NAMES.GET,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useAddTrustedDeviceMutation,
  useGetTrustedDevicesQuery,
  useLazyGetTrustedDevicesQuery,
  useLogoutUserMutation,
  useGetUserProfileInfoQuery,
  useLazyGetUserProfileInfoQuery,
} = authAPI;
