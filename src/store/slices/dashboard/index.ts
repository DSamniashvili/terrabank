import { createSlice } from '@reduxjs/toolkit';
import { DashboardStateProps } from './types';
import { dashboardAPI } from 'services/apis/dashboardAPI/dashboardAPI';

const initialState: DashboardStateProps = {
  templatesResponse: {
    loading: false,
    error: undefined,
    templates: [],
    transactions: [],
    assets: [],
    liabilities: [],
    creditCardLoans: [],
    loanCustomerId: [],
  },
};
// TODO - add extraReducers, so that setting templates does not happen in useBootstrapApp()
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(dashboardAPI.endpoints.getTemplates.matchPending, state => {
        state.templatesResponse.loading = true;
      })
      .addMatcher(dashboardAPI.endpoints.getTemplates.matchFulfilled, (state, action) => {
        state.templatesResponse.templates = action.payload.templates;
        state.templatesResponse.loading = false;
      })
      .addMatcher(dashboardAPI.endpoints.getTemplates.matchRejected, (state, action) => {
        state.templatesResponse.error = action.payload;
        state.templatesResponse.loading = false;
      })

      .addMatcher(dashboardAPI.endpoints.getCustomerOperations.matchFulfilled, (state, action) => {
        state.templatesResponse.transactions = action.payload.ops;
      })
      .addMatcher(dashboardAPI.endpoints.getOverDraft.matchFulfilled, (state, action) => {
        state.templatesResponse.liabilities = action.payload;
      })
      .addMatcher(dashboardAPI.endpoints.getCreditCards.matchFulfilled, (state, action) => {
        state.templatesResponse.creditCardLoans = action.payload;
      })
      .addMatcher(dashboardAPI.endpoints.getLoanCustomerId.matchFulfilled, (state, action) => {
        state.templatesResponse.loanCustomerId = action.payload;
      })
      .addMatcher(dashboardAPI.endpoints.getAssets.matchFulfilled, (state, action) => {
        state.templatesResponse.assets = action.payload;
      });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
