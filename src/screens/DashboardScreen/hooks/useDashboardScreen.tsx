import { useMemo } from 'react';
import { useAppSelector } from 'store/hooks/useAppSelector';

/**
 * whether to show or hide easy login prompt depends on couple of things:
 * 		1. if user has chosen not to remind him anymore about easy login option
 * 		2. if the user has already set either faceId, fingerPrint or passcode
 * 		3. if the user has postponed easy login option - TODO !! - we need to set it to false when user closes the app or logs out
 * @returns showEasyLoginPrompt: boolean - whether to show easy login modal
 */
export const useDashboardScreen = () => {
  const { ignoreEasyLogin, authorizationMethods, postponeEasyLogin } = useAppSelector(
    state => state.userInfo,
  );
  const { faceId, fingerPrint, passcode } = authorizationMethods;
  const easyLoginActivated = faceId || fingerPrint || passcode;

  const showEasyLoginPrompt = useMemo(() => {
    return !ignoreEasyLogin && !easyLoginActivated && !postponeEasyLogin;
  }, [ignoreEasyLogin, easyLoginActivated, postponeEasyLogin]);

  return {
    showEasyLoginPrompt,
  };
};
