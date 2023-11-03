import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Template } from 'services/apis/dashboardAPI/dashboardAPI.types';

export type DashboardStateProps = {
  templatesResponse: {
    templates?: Template[];
    loading?: any;
    error?: FetchBaseQueryError;
  };
};
