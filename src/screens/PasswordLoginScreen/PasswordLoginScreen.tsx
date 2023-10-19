import React, { FC, useEffect, useMemo } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Text, ControlledInput } from 'components';
import { withLoginScreen } from 'components/HOC';
import { PasswordLoginBaseProps } from './PasswordLoginScreen.types';
import useStyles from './PasswordLoginScreen.styles';
import { getAccessToken, removeValue } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { PASSCODE_LOGIN_SCREEN } from 'navigation/ScreenNames';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'services/apis';
import { openToast } from 'utils/toast';
import { closeModal, openModal } from 'utils/modal';
import { OTPModalTemp } from 'components/modals/OTPModal/OTPModalTemp';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setCredentials } from 'store/slices/userInfo';

const PasswordLoginScreenBase: FC<PasswordLoginBaseProps> = () => {
  const accessToken = getAccessToken();
  const { control, getValues } = useForm();
  const styles = useStyles();
  const [loginUser, { isError, error }] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const formValues = useMemo(() => {
    const { loginName = 'mrtavadze', password = '123456' } = getValues();
    return {
      loginName,
      password,
    };
  }, [getValues]);

  const handleSignInWithOTP = (OTPCode: string) => {
    loginUser({
      loginName: formValues.loginName,
      password: formValues.password,
      headers: {
        'X-Bank-Otp': OTPCode,
      },
    })
      .unwrap()
      .then(res => {
        if (res.accessToken) {
          dispatch(
            setCredentials({
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            }),
          );
          closeModal();
          //   handleNavigation?.();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleSignIn = () => {
    loginUser({ loginName: formValues.loginName, password: formValues.password })
      .unwrap()
      .then(res => {
        if (res.success && res.accessToken === null && accessToken === undefined) {
          openModal({
            // TODO !! - should be replaced with <OTPModal  onFinished={handleSignInWithOTP} />
            element: <OTPModalTemp onFinished={handleSignInWithOTP} />,
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (isError && error) {
      const errorTitle = (error as { [key: string]: any }).data.title;
      openToast(errorTitle, 'error');
    }
  }, [isError, error]);

  return (
    <View style={styles.wrapper}>
      <Text children="common:passAuth.auth" headline />
      <Text children="common:passAuth.personalData" secondary marginTop={4} />
      <ControlledInput
        control={control}
        name="loginName"
        label="common:passAuth.username"
        marginTop={48}
        required
      />
      <ControlledInput
        control={control}
        name="password"
        label="common:passAuth.password"
        marginTop={20}
        secureTextEntry
      />
      <View style={styles.chechboxContainer}>
        <ControlledInput
          control={control}
          type="checkbox"
          name="save"
          label="common:passAuth.save"
        />
        <Text children="common:passAuth.forgot" label special />
      </View>
      <View style={styles.buttonCont}>
        <Button.Primary text="common:passAuth.signin" onPress={handleSignIn} fullWidth />
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text children="common:passAuth.or" label special style={styles.text} />
          <View style={styles.divider} />
        </View>
        <Button.Secondary text="common:passAuth.signup" onPress={() => {}} fullWidth />
      </View>
      <Pressable onPress={() => removeValue(APP_LAUNCHED)}>
        <Text children="Start with onboarding" marginTop={20} />
      </Pressable>
    </View>
  );
};

export const PasswordLoginScreen = withLoginScreen<
  PasswordLoginBaseProps,
  typeof PASSCODE_LOGIN_SCREEN
>(PasswordLoginScreenBase, PASSCODE_LOGIN_SCREEN);
