import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Template, Transactions } from 'services/apis/dashboardAPI/dashboardAPI.types';

export type DashboardStateProps = {
  templatesResponse: {
    templates: Template[];
    transactions: Transactions[];
    loading?: any;
    error?: FetchBaseQueryError;
    liabilities: any;
    creditCardLoans: any;
    loanCustomerId: any;
    assets: any;
  };
};
