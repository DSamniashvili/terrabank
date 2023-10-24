import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationMethodsPayload, UserInfoStateProps } from './types';

const initialState: UserInfoStateProps = {
  accessToken: '',
  refreshToken: '',
  authorizationMethods: {
    sms: false,
    passcode: false,
    faceId: false,
    fingerPrint: false,
  },
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setAuthorizationMethod: (state, action: PayloadAction<AuthorizationMethodsPayload>) => {
      if (action.payload.key in state.authorizationMethods) {
        state.authorizationMethods[action.payload.key] = action.payload.value;
      }
    },
  },
});

export const { setCredentials, setAuthorizationMethod } = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
