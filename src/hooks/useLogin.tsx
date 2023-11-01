import { OTPModalTemp } from 'components/modals/OTPModal/OTPModalTemp';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'services/apis';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setUserCredentials } from 'store/slices/userInfo';
import { setCredentials } from 'utils/keychain';
import { closeModal, openModal } from 'utils/modal';
import { openToast } from 'utils/toast';

export const useLogin = (savedUsername?: string | null | undefined) => {
  const { control, reset, getValues } = useForm();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const getFormValues = () => {
    const { loginName, password, save } = getValues();
    return {
      loginName: savedUsername || loginName,
      password,
      save,
    };
  };

  const handleSignInWithOTP = (OTPCode: string) => {
    const { loginName, password } = getFormValues();
    loginUser({
      loginName,
      password,
      headers: {
        'X-Bank-Otp': OTPCode,
      },
    })
      .unwrap()
      .then(res => {
        if (res.accessToken) {
          dispatch(
            setUserCredentials({
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            }),
          );
          closeModal();
        }
      })
      .catch(err => {
        const errorTitle = (err as { [key: string]: any })?.data?.title;
        openToast(errorTitle, 'error');
        console.error(err);
      });
  };

  const handleSignIn = () => {
    const { loginName, password } = getFormValues();
    loginUser({ loginName, password })
      .unwrap()
      .then(res => {
        if (res.success && !res.accessToken) {
          openModal({
            element: <OTPModalTemp onFinished={code => handleSignInWithOTP(code)} />,
          });
        }
      })
      .catch(err => {
        reset({
          loginName: '',
          password: '',
        });
        const errorTitle = (err as { [key: string]: any })?.data?.title;
        openToast(errorTitle, 'error');
        console.error(err);
      });
  };

  const handleSaveUserToggle = () => {
    const { loginName, save } = getFormValues();
    if (save) {
      setCredentials({ username: loginName });
    }
  };

  return {
    handleSignIn,
    handleSignInWithOTP,
    control,
    reset,
    handleSaveUserToggle,
  };
};
