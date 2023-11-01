import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import { GetTemplatesRequestType, GetTemplatesResponseType } from './dashboardAPI.types';
import { URLS } from 'services/constants/urls';
import { METHOD_NAMES } from 'services/constants';

export const dashboardAPI = createApi({
  reducerPath: 'dashboardAPI',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['Dashboard'],
  endpoints: builder => ({
    getTemplates: builder.query<GetTemplatesResponseType, GetTemplatesRequestType>({
      query: args => ({
        url: URLS.getTemplates,
        method: METHOD_NAMES.GET,
        ...args,
      }),
    }),
  }),
});

export const { useGetTemplatesQuery, useLazyGetTemplatesQuery } = dashboardAPI;
