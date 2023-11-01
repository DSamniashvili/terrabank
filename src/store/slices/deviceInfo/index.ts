import { createSlice } from '@reduxjs/toolkit';
import { DeviceInfoStateProps } from './types';

const initialState: DeviceInfoStateProps = {
  deviceId: null,
  userAgent: null,
  osType: null,
  userIp: null,
  deviceToken: null,
};

const deviceInfoSlice = createSlice({
  name: 'deviceInfo',
  initialState,
  reducers: {
    setDeviceInfo: (state, action) => {
      state.deviceId = action.payload.deviceId;
      state.userAgent = action.payload.userAgent;
      state.osType = action.payload.osType;
      state.userIp = action.payload.userIp;
      state.deviceToken = action.payload.deviceToken;
    },
  },
});

export const { setDeviceInfo } = deviceInfoSlice.actions;
export const deviceInfoReducer = deviceInfoSlice.reducer;
