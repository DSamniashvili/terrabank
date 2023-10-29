import { createSlice } from '@reduxjs/toolkit';
import { UserInfoStateProps } from './types';
import { authAPI } from 'services/apis';

const initialState: UserInfoStateProps = {
  accessToken: '',
  refreshToken: '',
  ignoreEasyLogin: false,
  postponeEasyLogin: false,
  isDeviceTrusted: false,
  userProfileInfo: {
    loading: false,
    error: undefined,
    profileInfo: {},
  },
  loginName: '',
  isLoggingOut: false,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setIgnoreEasyLogin: (state, action) => {
      state.ignoreEasyLogin = action.payload;
    },
    setPostponeEasyLogin: (state, action) => {
      state.postponeEasyLogin = action.payload;
    },
    saveLoginName: (state, action) => {
      state.loginName = action.payload;
    },
    clearLoginName: state => {
      state.loginName = '';
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(authAPI.endpoints.getUserProfileInfo.matchPending, state => {
        state.userProfileInfo.loading = true;
      })
      .addMatcher(authAPI.endpoints.getUserProfileInfo.matchFulfilled, (state, action) => {
        state.userProfileInfo.loading = false;
        state.userProfileInfo.profileInfo = action.payload;
      })
      .addMatcher(authAPI.endpoints.getUserProfileInfo.matchRejected, (state, action) => {
        state.userProfileInfo.error = action.payload;
        state.userProfileInfo.loading = false;
      });
    builder
      .addMatcher(authAPI.endpoints.logoutUser.matchPending, state => {
        state.isLoggingOut = true;
      })
      .addMatcher(authAPI.endpoints.logoutUser.matchFulfilled, state => {
        state.postponeEasyLogin = initialState.postponeEasyLogin;
        state.isLoggingOut = false;
        state.accessToken = initialState.accessToken;
        state.refreshToken = initialState.refreshToken;
        state.userProfileInfo = initialState.userProfileInfo;
      })
      .addMatcher(authAPI.endpoints.logoutUser.matchRejected, state => {
        state.isLoggingOut = false;
      });
  },
});

export const {
  setCredentials,
  setIgnoreEasyLogin,
  setPostponeEasyLogin,
  saveLoginName,
  clearLoginName,
} = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;
