import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useMemo } from 'react';
import {
  useGetAccountsByCustomerIdQuery,
  useGetDepositsQuery,
  // useGetLoansByCustomerIdQuery,
} from 'services/apis/productsAPI/productsAPI';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useTeraProducts = () => {
  const { customerId } = useAppSelector(state => state.profile);
  const { data: accounts } = useGetAccountsByCustomerIdQuery(customerId ?? skipToken);
  const { data: deposits } = useGetDepositsQuery(customerId ?? skipToken);
  // const { data: loans } = useGetLoansByCustomerIdQuery(customerId ?? skipToken);

  const totalAvailableBalance = useMemo(() => {
    return accounts?.reduce((acc, cur) => acc + cur.availableBalance, 0);
  }, [accounts]);

  const totalDeposits = useMemo(() => {
    return deposits?.reduce((acc, cur) => acc + cur.amount, 0);
  }, [deposits]);

  return {
    accounts,
    totalAvailableBalance,
    deposits,
    totalDeposits,
  };
};
