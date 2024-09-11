import { configureStore } from '@reduxjs/toolkit';

import { usersAPI, usersFilterReducer } from '@/modules/UsersContainer';

export const store = configureStore({
  reducer: {
    [usersAPI.reducerPath]: usersAPI.reducer,
    usersFilter: usersFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
