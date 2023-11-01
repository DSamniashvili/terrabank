import { useLogoutUserMutation } from 'services/apis';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { setPostponeEasyLogin } from 'store/slices/userInfo';

export const useLogout = () => {
  const [logoutUser] = useLogoutUserMutation();
  const dispatch = useAppDispatch();
  const { userIp, deviceToken } = useAppSelector(state => state.deviceInfo);

  const handleLogout = async () => {
    try {
      await logoutUser({
        headers: {
          'X-Bank-UserIp': userIp,
          'X-Bank-DeviceToken': deviceToken,
        },
      });
      dispatch(setPostponeEasyLogin(false));
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return { handleLogout };
};
