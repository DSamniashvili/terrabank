import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ITodosRes, Todo } from './types';

const BASE_URL = 'https://reqres.in/api/';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Example'],
  endpoints: builder => ({
    getUsers: builder.query<Todo[], void>({
      query: () => ({
        url: 'users',
      }),
      providesTags: ['Example'],
      transformResponse: (response: ITodosRes) => response.data,
    }),
  }),
});

export const { useGetUsersQuery } = exampleApi;
