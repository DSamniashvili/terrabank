import { useNavigation } from '@react-navigation/native';
import {
  AUTHORIZATION_METHODS_SCREEN,
  PROFILE_STACK,
  SETTINGS_STACK,
} from 'navigation/ScreenNames';
import { MainNavigationProps } from 'navigation/types';
import { useEffect, useMemo } from 'react';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { closeModal } from 'utils/modal';

/**
 * whether to show or hide easy login prompt depends on couple of things:
 * 		1. if user has chosen not to remind him anymore about easy login option
 * 		2. if the user has already set either faceId, fingerPrint or passcode
 * 		3. if the user has postponed easy login option - TODO !! - we need to set it to false when user closes the app or logs out
 * @returns showEasyLoginPrompt: boolean - whether to show easy login modal
 */
export const useEasyLoginModal = () => {
  const navigation = useNavigation<MainNavigationProps<'DashboardStack'>>();

  const { ignoreEasyLogin, authorizationMethods, postponeEasyLogin } = useAppSelector(
    state => state.userInfo,
  );
  const { templates } = useAppSelector(state => state.dashboard.templatesResponse);
  const { faceId, fingerPrint, passcode } = authorizationMethods;
  const easyLoginActivated = faceId || fingerPrint || passcode;

  const showEasyLoginPrompt = useMemo(() => {
    return (
      navigation.isFocused() &&
      !ignoreEasyLogin &&
      !easyLoginActivated &&
      !postponeEasyLogin &&
      templates
    );
  }, [navigation, ignoreEasyLogin, easyLoginActivated, postponeEasyLogin, templates]);

  /**
   * handles navigation to "AuthorizationMethodsScreen", when "activate" is pressed on the EasyLoginModal
   */
  const handleNavigateToAuthorizationMethodsScreeen = () => {
    closeModal();

    navigation.navigate(PROFILE_STACK, {
      screen: SETTINGS_STACK,
      params: { screen: AUTHORIZATION_METHODS_SCREEN },
    });
  };

  /**
   * if user enables "do not remind" toggle or select "next time" and the redux state updates, we automatically close the modal
   */
  useEffect(() => {
    (ignoreEasyLogin || postponeEasyLogin) && closeModal();
  }, [ignoreEasyLogin, postponeEasyLogin]);

  return {
    showEasyLoginPrompt,
    handleNavigateToAuthorizationMethodsScreeen,
  };
};
