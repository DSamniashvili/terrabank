import { useEffect } from 'react';
import {
  useGetTemplatesQuery,
  useGetCustomerOperationsMutation,
  useGetCreditCardsQuery,
  useGetOverDraftQuery,
  useGetLoanCustomerIdQuery,
  useGetAssetsQuery,
  useGetBankerQuery,
} from 'services/apis/dashboardAPI/dashboardAPI';

export const useDashboardScreen = () => {
  const { data: templates, isLoading: temlpatesLoading } = useGetTemplatesQuery();
  const [getCustomerOperations, { data: customOperations, isLoading: customerOperationsLoading }] =
    useGetCustomerOperationsMutation();
  const { data: creditCards, isLoading: creditCardsLoading } = useGetCreditCardsQuery();
  const { data: overDraft, isLoading: overDraftLoading } = useGetOverDraftQuery();
  const { data: getLoanCustomerId, isLoading: customerIdLoading } = useGetLoanCustomerIdQuery();
  const { data: assets, isLoading: assetsLoading } = useGetAssetsQuery();
  const { data: banker, isLoading: bankerLoading } = useGetBankerQuery();

  useEffect(() => {
    getCustomerOperations({
      count: 5,
      culture: 'ka',
      currency: 'gel',
      endDate: '2023-10-24T16:24:09.087Z',
      startDate: '2023-08-24T16:24:09.087Z',
      accountNumber: null,
    });
  }, [getCustomerOperations]);

  return {
    templates,
    temlpatesLoading,
    customerOperationsLoading,
    customerIdLoading,
    assetsLoading,
    bankerLoading,
    overDraftLoading,
    creditCardsLoading,
    customOperations,

    creditCards,
    overDraft,
    getLoanCustomerId,
    assets,
    banker,
  };
};
