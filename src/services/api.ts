import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { getAccessToken, getRefreshToken } from 'storage/index';
import { URLS } from './urls';

const BASE_URL = 'http://10.213.0.136:4040/';

const mutex = new Mutex();

/**
 *
 * @param headers
 * @returns default headers, that will be used in all API request cycle
 */
const defaultHeaders = (headers: Headers) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }
  headers.set('User-Agent', 'terabank');
  headers.set('X-Bank-ChannelId', '1000006');
  headers.set('X-Bank-Devicedescription', '1');
  headers.set('X-Bank-DeviceId', '1');
  headers.set('X-Bank-Isstrongauthrequest', '1');
  headers.set('X-Bank-Ostype', '1');
  headers.set('X-Bank-UserAgent', '1');

  return headers;
};

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: defaultHeaders,
});

export const baseQueryWithInterceptor: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError,
  any,
  FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
  let customHeaders: Record<string, string> = {};

  // We can pass custom headers, depending on a specific API request, just like this: {headerKey: "headerValue"}
  if (typeof args !== 'string' && args.headers) {
    customHeaders = args.headers as Record<string, string>;
  }

  //   then set the headers as it should: headers.set('headerKey', 'headerValue');
  const headers = new Headers();
  for (const [key, value] of Object.entries(customHeaders)) {
    headers.set(key, value);
  }

  //   and lastly, merge default headers with custom ones, that have been provided in query
  //   for example:
  //   loginUser({
  // 		loginName,
  // 		password,
  // 		headers: {
  // 	  	'X-Bank-Otp': '000000',
  // 		},
  //   });
  const enhancedArgs = {
    ...args,
    headers: headers,
  };

  await mutex.waitForUnlock();
  let result = await baseQuery(enhancedArgs, api, extraOptions);

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
