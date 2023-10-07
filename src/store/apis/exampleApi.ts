import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IUsersRes, User } from './types';

const BASE_URL = 'https://reqres.in/api/';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
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
