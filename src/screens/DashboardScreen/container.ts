import { useEffect } from 'react';
import {
  useGetTemplatesQuery,
  useGetCustomerOperationsMutation,
  useGetCreditCardsQuery,
  useGetOverDraftQuery,
  useGetLoanCustomerIdQuery,
  //   useLazyGetCreditCardsQuery,
  useGetAssetsQuery,
  useGetBankerQuery,
} from 'services/apis/dashboardAPI/dashboardAPI';
// import { useAppDispatch } from 'store/hooks/useAppDispatch';

export const useDashboardScreen = () => {
  const { data: templates, isLoading } = useGetTemplatesQuery();
  const [getCustomerOperations, { data: customOperations }] = useGetCustomerOperationsMutation();
  //   const { data: templates, isLoading } = useGetTemplatesQuery(undefined, {skip: !templates});
  const { data: creditCards } = useGetCreditCardsQuery();
  const { data: overDraft } = useGetOverDraftQuery();
  const { data: getLoanCustomerId } = useGetLoanCustomerIdQuery();
  const { data: assets } = useGetAssetsQuery();
  const { data: banker } = useGetBankerQuery();

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
    isLoading,
    customOperations,
    creditCards,
    overDraft,
    getLoanCustomerId,
    assets,
    banker,
  };
};
