import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Inputs, type InputChange } from '../types';

const initialState: Inputs = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const usersFilterSlice = createSlice({
  name: 'usersFilter',
  initialState,
  reducers: {
    handleInputChange: (state, action: PayloadAction<InputChange>) => {
      const { name, value } = action.payload;

      state[name] = value;
    },
    handleClear: (state, action: PayloadAction<keyof Inputs>) => {
      state[action.payload] = '';
    },
    handleClearAll: (state) => {
      state.name = '';
      state.username = '';
      state.email = '';
      state.phone = '';
    },
  },
});

export const { reducer, actions } = usersFilterSlice;
