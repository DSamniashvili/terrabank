import { useAppSelector } from 'store/hooks/useAppSelector';

export const useBootstrapApp = () => {
  const { accessToken } = useAppSelector(state => state.userInfo);

  return {
    isAuth: !!accessToken,
  };
};
