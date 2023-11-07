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
    banker: null | {
      firstName: string;
      lastName: string;
      branchName: string;
      phone: string;
      branchPhone: string;
      email: string;
      imageId: string;
    };
  };
  shouldCloseCards: boolean;
  scrollToTop: boolean;
};
