import { createSlice } from '@reduxjs/toolkit';
import { DashboardState } from './types';

const initialState: DashboardState = {
  shouldCloseCards: false,
  scrollToTop: false,
};

const dashboardSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setShouldCloseCards: (state, { payload }) => {
      state.shouldCloseCards = payload;
    },
    setScrollToTop: (state, { payload }) => {
      state.scrollToTop = payload;
    },
  },
});

export const { setShouldCloseCards, setScrollToTop } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
