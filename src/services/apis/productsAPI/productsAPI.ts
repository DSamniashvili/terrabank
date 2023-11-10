import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import { URLS } from 'services/constants/urls';
import { METHOD_NAMES } from 'services/constants';
import { Account, OfferType, OffersAPIResponseType } from './productsAPI.types';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['Auth'],
  endpoints: builder => ({
    getAccountsByCustomerId: builder.query<Account[], number>({
      query: UserId => ({
        url: URLS.getAccountsByCustomerId,
        method: METHOD_NAMES.GET,
        params: {
          UserId,
        },
      }),
    }),
    getOffers: builder.query<OfferType[], number>({
      query: UserId => ({
        url: URLS.getOffers,
        method: METHOD_NAMES.GET,
        params: {
          UserId,
        },
      }),
      transformResponse: (response: OffersAPIResponseType) => response.offers,
    }),
  }),
});

export const { useGetAccountsByCustomerIdQuery, useGetOffersQuery } = productsAPI;
