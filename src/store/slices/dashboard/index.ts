import { createSlice } from '@reduxjs/toolkit';
import { DashboardStateProps } from './types';
import { dashboardAPI } from 'services/apis/dashboardAPI/dashboardAPI';

const initialState: DashboardStateProps = {
  templatesResponse: {
    loading: false,
    error: undefined,
    templates: [],
    transactions: [],
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
      })
      // .addMatcher(dashboardAPI.endpoints.getCustomerOperations.matchPending, state => {
      //   // Handle the action when the request for getCustomerOperations is pending if needed
      // })
      .addMatcher(dashboardAPI.endpoints.getCustomerOperations.matchFulfilled, (state, action) => {
        state.templatesResponse.transactions = action.payload.ops;
        // Handle the action when the request for getCustomerOperations is successful
        // You can update the state with the returned data here
      });
    // .addMatcher(dashboardAPI.endpoints.getCustomerOperations.matchRejected, (state, action) => {
    //   // Handle the action when the request for getCustomerOperations is rejected if needed
    //   // You might want to handle errors or reset the state here
    // });
  },
});

export const dashboardReducer = dashboardSlice.reducer;
