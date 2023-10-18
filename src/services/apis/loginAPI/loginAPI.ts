import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import { LoginAPIRequestType, LoginAPIResponseType } from './loginAPI.types';
import { URLS } from 'services/urls';

export const loginAPI = createApi({
  reducerPath: 'userInfo',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['User'],
  endpoints: builder => ({
    loginUser: builder.mutation<LoginAPIResponseType, LoginAPIRequestType>({
      query: credentials => ({
        url: URLS.login,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = loginAPI;
