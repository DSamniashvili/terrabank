import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Text, ControlledInput, Account } from 'components';
import { withLoginScreen } from 'components/HOC';
import { PasswordOnlyLoginBaseProps } from './PasswordOnlyLoginScreen.types';
import useStyles from './PasswordOnlyLoginScreen.styles';
import { removeValue } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { PASSCODE_LOGIN_SCREEN } from 'navigation/ScreenNames';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'services/apis';
import { openToast } from 'utils/toast';
import { closeModal, openModal } from 'utils/modal';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setUserCredentials } from 'store/slices/userInfo';
import { OTPModalTemp } from 'components/modals/OTPModal/OTPModalTemp';
import { useKeyChain } from 'hooks/useKeychain';

const PasswordOnlyLoginScreenBase: FC<PasswordOnlyLoginBaseProps> = () => {
  const { control, getValues, reset } = useForm();
  const styles = useStyles();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const { savedUserName } = useKeyChain();

  const getFormValues = () => {
    const { password } = getValues();
    return {
      // we assign already existing userName, stored in keychain to the request body loginName
      loginName: savedUserName || '',
      password,
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
        // TODO - clean the values (6 digits)
        console.error(err);
      });
  };

  const handleSignIn = () => {
    const { loginName, password } = getFormValues();
    loginUser({ loginName, password })
      .unwrap()
      .then(res => {
        if (res.success && res.accessToken === null) {
          openModal({
            // TODO !! - should be replaced with <OTPModal  onFinished={handleSignInWithOTP} />
            element: <OTPModalTemp onFinished={handleSignInWithOTP} />,
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

  return (
    <View style={styles.wrapper}>
      {savedUserName && <Account user={savedUserName} />}
      <Button.Secondary text="მომხმარებლის შეცვლა" size="medium" />
      <ControlledInput
        control={control}
        name="password"
        label="common:passAuth.password"
        marginTop={20}
        secureTextEntry
      />
      <View style={styles.chechboxContainer}>
        <Text children="common:passAuth.forgot" label special />
      </View>
      <View style={styles.buttonCont}>
        <Button.Primary text="common:passAuth.signin" onPress={handleSignIn} fullWidth />
      </View>
      <Pressable onPress={() => removeValue(APP_LAUNCHED)}>
        <Text children="Start with onboarding" marginTop={20} />
      </Pressable>
    </View>
  );
};

export const PasswordOnlyLoginScreen = withLoginScreen<
  PasswordOnlyLoginBaseProps,
  typeof PASSCODE_LOGIN_SCREEN
>(PasswordOnlyLoginScreenBase, PASSCODE_LOGIN_SCREEN);
