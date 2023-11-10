import { skipToken } from '@reduxjs/toolkit/dist/query';
import {
  useGetAccountsByCustomerIdQuery,
  useGetOffersQuery,
} from 'services/apis/productsAPI/productsAPI';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useAllAcounts = () => {
  const { customerId } = useAppSelector(state => state.profile);
  const { data: accounts } = useGetAccountsByCustomerIdQuery(customerId ?? skipToken);
  const { data: offers } = useGetOffersQuery(customerId ?? skipToken);

  const totalAvailableBalance = accounts?.reduce((acc, cur) => acc + cur.availableBalance, 0);

  return {
    accounts,
    totalAvailableBalance,
    offers,
  };
};
