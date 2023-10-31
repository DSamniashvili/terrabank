import { useLogoutUserMutation } from 'services/apis';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setPostponeEasyLogin } from 'store/slices/userInfo';

export const useLogout = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      const logoutReqBody = {};
      await logoutUser(logoutReqBody);
      dispatch(setPostponeEasyLogin(false));
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return { handleLogout };
};
