import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useMemo } from 'react';
import {
  useGetAccountsByCustomerIdQuery,
  useGetDepositsQuery,
  useGetLoansByCustomerIdQuery,
} from 'services/apis/productsAPI/productsAPI';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { calculateSum } from 'utils/calculateSum';

export const useTeraProducts = () => {
  const { customerId } = useAppSelector(state => state.profile);
  const { data: accounts } = useGetAccountsByCustomerIdQuery(customerId ?? skipToken);
  const { data: deposits } = useGetDepositsQuery(customerId ?? skipToken);
  const { data: loans } = useGetLoansByCustomerIdQuery(customerId ?? skipToken);

  const totalAvailableBalance = useMemo(() => {
    if (!accounts) {
      return 0;
    }
    return calculateSum(accounts, 'availableBalance');
  }, [accounts]);

  const totalDeposits = useMemo(() => {
    if (!deposits) {
      return 0;
    }
    return calculateSum(deposits, 'amount');
  }, [deposits]);

  const totalLoans = useMemo(() => {
    if (!loans) {
      return 0;
    }
    return calculateSum(loans, 'totalDebt');
  }, [loans]);

  return {
    accounts,
    totalAvailableBalance,
    deposits,
    totalDeposits,
    loans,
    totalLoans,
  };
};
