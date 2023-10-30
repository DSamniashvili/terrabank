// hooks/useAppInitialization.ts

import { useState, useEffect } from 'react';
import { setValue, storageKeys } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { getPasscode } from 'utils/keychain';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useBootstrapApp = () => {
  const [loading, setLoading] = useState(true);
  const [savedPasscode, setSavedPasscode] = useState<string | null | undefined>();
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  const { accessToken, loginName: userName } = useAppSelector(state => state.userInfo);

  useEffect(() => {
    const fetchInitialData = async () => {
      const isLaunchedBefore = storageKeys().includes(APP_LAUNCHED);

      if (!isLaunchedBefore) {
        await setValue(APP_LAUNCHED, true);
        setIsFirstLaunch(true);
      }

      const passcode = await getPasscode();
      setSavedPasscode(passcode);

      setLoading(false);
    };

    fetchInitialData();
  }, []);

  return {
    loading,
    savedPasscode,
    isFirstLaunch,
    isAuth: !!accessToken,
    userName,
  };
};
