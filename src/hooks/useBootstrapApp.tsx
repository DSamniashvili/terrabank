import { useEffect } from 'react';
import {
  useLazyGetTemplatesQuery,
  useGetCustomerOperationsMutation,
  useLazyGetOverDraftQuery,
  useLazyGetLoanCustomerIdQuery,
  useLazyGetCreditCardsQuery,
  useLazyGetAssetsQuery,
} from 'services/apis/dashboardAPI/dashboardAPI';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useBootstrapApp = () => {
  const { accessToken } = useAppSelector(state => state.userInfo);
  const dispatch = useAppDispatch();
  const [getDashboardTemplates] = useLazyGetTemplatesQuery();
  const [getCreditCards] = useLazyGetCreditCardsQuery();
  const [getCustomerOperations] = useGetCustomerOperationsMutation();
  const [getOverDraft] = useLazyGetOverDraftQuery();
  const [getLoanCustomerId] = useLazyGetLoanCustomerIdQuery();
  const [getAssets] = useLazyGetAssetsQuery();

  useEffect(() => {
    if (accessToken) {
      // Fetch all items that are needed on Dashboard - first screen after login
      getDashboardTemplates();
      getCustomerOperations({
        count: 5,
        culture: 'ka',
        currency: 'gel',
        endDate: '2023-10-24T16:24:09.087Z',
        startDate: '2023-08-24T16:24:09.087Z',
        accountNumber: null,
      });
      getCreditCards();
      getOverDraft();
      getLoanCustomerId();
      getAssets();
    }
  }, [
    accessToken,
    getDashboardTemplates,
    dispatch,
    getCustomerOperations,
    getOverDraft,
    getLoanCustomerId,
    getAssets,
    getCreditCards,
  ]);

  return {
    isAuth: accessToken,
  };
};
