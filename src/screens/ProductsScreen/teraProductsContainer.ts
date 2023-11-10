import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useGetAccountsByCustomerIdQuery } from 'services/apis/productsAPI/productsAPI';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useTeraProducts = () => {
  const { customerId } = useAppSelector(state => state.profile);
  const { data: accounts } = useGetAccountsByCustomerIdQuery(customerId ?? skipToken);

  const totalAvailableBalance = accounts?.reduce((acc, cur) => acc + cur.availableBalance, 0);

  return {
    accounts,
    totalAvailableBalance,
  };
};
