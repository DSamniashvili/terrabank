import { useEffect } from 'react';
import { useLazyGetTemplatesQuery } from 'services/apis/dashboardAPI/dashboardAPI';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useBootstrapApp = () => {
  const { accessToken } = useAppSelector(state => state.userInfo);
  const dispatch = useAppDispatch();
  const [getDashboardTemplates] = useLazyGetTemplatesQuery();

  useEffect(() => {
    if (accessToken) {
      // Fetch all items that are needed on Dashboard - first screen after login
      getDashboardTemplates();
    }
  }, [accessToken, getDashboardTemplates, dispatch]);

  return {
    isAuth: accessToken,
  };
};
