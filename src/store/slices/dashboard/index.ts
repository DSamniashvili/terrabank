import { createSlice } from '@reduxjs/toolkit';
import { DashboardStateProps } from './types';
import { dashboardAPI } from 'services/apis/dashboardAPI/dashboardAPI';

const initialState: DashboardStateProps = {
  templatesResponse: {
    loading: false,
    error: undefined,
    templates: [],
  },
  shouldCloseCards: false,
  scrollToTop: false,
};
// TODO - add extrareducers, so that setting templates does not happen in useBootstrapApp()
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setShouldCloseCards: (state, { payload }) => {
      state.shouldCloseCards = payload;
    },
    setScrollToTop: (state, { payload }) => {
      state.scrollToTop = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(dashboardAPI.endpoints.getTemplates.matchPending, state => {
        state.templatesResponse.loading = true;
        // handle the action when the request is pending if needed
      })
      .addMatcher(dashboardAPI.endpoints.getTemplates.matchFulfilled, (state, action) => {
        // When the request is successful, update the state with the returned data
        state.templatesResponse.templates = action.payload.templates;
        state.templatesResponse.loading = false;
      })
      .addMatcher(dashboardAPI.endpoints.getTemplates.matchRejected, (state, action) => {
        state.templatesResponse.error = action.payload;
        state.templatesResponse.loading = false;
        // handle the action when the request is rejected if needed
        // You might want to handle errors or reset the state here
      });
  },
});

export const { setShouldCloseCards, setScrollToTop } = dashboardSlice.actions;
export const dashboardReducer = dashboardSlice.reducer;
