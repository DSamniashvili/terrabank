import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationMethodsPayload, UserInfoStateProps } from './types';

const initialState: UserInfoStateProps = {
  accessToken: '',
  refreshToken: '',
  authorizationMethods: {
    sms: true,
    passcode: false,
    faceId: false,
    fingerPrint: false,
  },
  ignoreEasyLogin: false,
  postponeEasyLogin: false,
  isDeviceTrusted: false,
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
    setIgnoreEasyLogin: (state, action) => {
      state.ignoreEasyLogin = action.payload;
    },
    setPostponeEasyLogin: (state, action) => {
      state.postponeEasyLogin = action.payload;
    },
  },
});

export const { setCredentials, setAuthorizationMethod, setIgnoreEasyLogin, setPostponeEasyLogin } =
  userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
