// hooks/useAppInitialization.ts

import { useState, useEffect } from 'react';
import { setValue, storageKeys } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { useNavigationContainerRef } from '@react-navigation/native';

export const useBootstrapApp = () => {
  const navigationRef = useNavigationContainerRef();
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);
  const { accessToken } = useAppSelector(state => state.userInfo);

  useEffect(() => {
    const fetchInitialData = async () => {
      const isLaunchedBefore = storageKeys().includes(APP_LAUNCHED);

      if (!isLaunchedBefore) {
        await setValue(APP_LAUNCHED, true);
        setIsFirstLaunch(true);
      }

      setLoading(false);
    };

    fetchInitialData();
  }, []);

  return {
    loading,
    isFirstLaunch,
    isAuth: !!accessToken,
    navigationRef,
  };
};
