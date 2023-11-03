import { createSlice } from '@reduxjs/toolkit';
import { ScrollState } from './types';

const initialState: ScrollState = {
  shouldCloseCards: false,
  scrollToTop: false,
};

const scrollSlice = createSlice({
  name: 'scroll',
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

export const { setShouldCloseCards, setScrollToTop } = scrollSlice.actions;
export const scrollReducer = scrollSlice.reducer;
