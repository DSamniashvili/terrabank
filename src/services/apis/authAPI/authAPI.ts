import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import {
  AddTrustedDeviceAPIRequestType,
  AddTrustedDeviceAPIResponseType,
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
        body: body,
      }),
    }),
    getTrustedDevices: builder.query<any, void>({
      query: () => ({
        url: URLS.getTrustedDevices,
        method: METHOD_NAMES.GET,
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
  }),
});

export const {
  useLoginUserMutation,
  useAddTrustedDeviceMutation,
  useGetTrustedDevicesQuery,
  useLazyGetTrustedDevicesQuery,
  useLogoutUserMutation,
} = authAPI;
