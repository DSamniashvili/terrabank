import { createSlice } from '@reduxjs/toolkit';
import { UserInfoStateProps } from './types';

const initialState: UserInfoStateProps = {
  accessToken: '',
  refreshToken: '',
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setCredentials } = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
