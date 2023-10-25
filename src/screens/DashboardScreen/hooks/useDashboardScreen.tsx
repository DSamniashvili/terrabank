import { useMemo } from 'react';
import { useAppSelector } from 'store/hooks/useAppSelector';

export const useDashboardScreen = () => {
  const { ignoreEasyLogin, authorizationMethods } = useAppSelector(state => state.userInfo);
  const { faceId, fingerPrint, passcode } = authorizationMethods;
  const easyLoginActivated = faceId || fingerPrint || passcode;

  const showEasyLoginPrompt = useMemo(() => {
    return !ignoreEasyLogin && !easyLoginActivated;
  }, [ignoreEasyLogin, easyLoginActivated]);

  return {
    showEasyLoginPrompt,
  };
};
