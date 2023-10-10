import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithInterceptor } from 'services/api';
import { IUsersRes, User } from './types';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ['User'],
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: 'users',
      }),
      providesTags: ['User'],
      transformResponse: (response: IUsersRes) => response.data,
    }),
  }),
});

export const { useGetUsersQuery } = exampleApi;
