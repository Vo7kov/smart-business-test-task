import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], string>({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});
