import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type User, type Inputs } from '../types';

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query<User[], Inputs>({
      query: (queries) => {
        const { name = '', username = '', email = '', phone = '' } = queries;

        return {
          url: '/users',
          params: {
            name_like: name,
            username_like: username,
            email_like: email,
            phone_like: phone,
          },
        };
      },
    }),
  }),
});
