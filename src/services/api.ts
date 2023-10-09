import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { getAccessToken, getRefreshToken } from 'storage/index';
import * as URLS from './urls';

const BASE_URL = 'https://reqres.in/api/';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    const accessToken = getAccessToken();
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    headers.set('User-Agent', 'terabank');
    return headers;
  },
});

export const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  any,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshToken = getRefreshToken();

    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            method: 'POST',
            url: URLS.authRefresh,
            body: { refreshToken },
          },
          api,
          extraOptions,
        );

        if (refreshResult.data) {
          // save access and refresh tokens here

          result = await baseQuery(args, api, extraOptions);
        } else {
          // log out here
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
