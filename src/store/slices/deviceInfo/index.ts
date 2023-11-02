import { createSlice } from '@reduxjs/toolkit';
import { DeviceInfoStateProps } from './types';

const initialState: DeviceInfoStateProps = {
  deviceId: null,
  userAgent: null,
  osType: null,
  userIp: null,
  deviceToken: null,
  isDeviceTrusted: {
    isTrusted: null,
    isLoading: null,
    error: null,
  },
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
    setIsDeviceTrusted: (state, action) => {
      state.isDeviceTrusted = action.payload;
    },
  },
});

export const { setDeviceInfo, setIsDeviceTrusted } = deviceInfoSlice.actions;
export const deviceInfoReducer = deviceInfoSlice.reducer;
