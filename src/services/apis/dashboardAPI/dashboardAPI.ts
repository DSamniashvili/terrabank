import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import { GetTemplatesResponseType } from './dashboardAPI.types';
import { URLS } from 'services/constants/urls';
import { METHOD_NAMES } from 'services/constants';

export const dashboardAPI = createApi({
  reducerPath: 'dashboardAPI',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['Dashboard'],
  endpoints: builder => ({
    getTemplates: builder.query<GetTemplatesResponseType, void>({
      query: () => ({
        url: URLS.getTemplates,
        method: METHOD_NAMES.GET,
        headers: {
          // TODO - temp!!!
          'X-Bank-UserIp': '1',
        },
      }),
    }),
  }),
});

export const { useGetTemplatesQuery, useLazyGetTemplatesQuery } = dashboardAPI;
