import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationMethodsPayload, AuthorizationMethodsState } from './types';

const initialState: AuthorizationMethodsState = {
  sms: false,
  passcode: false,
  faceId: false,
  biometric: false,
};

const authorizationMethodsSlice = createSlice({
  name: 'switches',
  initialState,
  reducers: {
    setAuthorizationMethod: (state, action: PayloadAction<AuthorizationMethodsPayload>) => {
      if (action.payload.key in state) {
        state[action.payload.key] = action.payload.value;
      }
    },
  },
});

export const { setAuthorizationMethod } = authorizationMethodsSlice.actions;
export const authorizationMethodsReducer = authorizationMethodsSlice.reducer;
