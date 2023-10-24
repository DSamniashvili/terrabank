import React, { FC } from 'react';
import { Alert, Pressable, View } from 'react-native';
import { Button, Text, ControlledInput, OTPModal } from 'components';
import { withLoginScreen } from 'components/HOC';
import { PasswordLoginBaseProps } from './PasswordLoginScreen.types';
import useStyles from './PasswordLoginScreen.styles';
import { removeValue } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { PASSCODE_LOGIN_SCREEN } from 'navigation/ScreenNames';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'services/apis';
import { openToast } from 'utils/toast';
import { closeModal, openModal } from 'utils/modal';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setCredentials } from 'store/slices/userInfo';

const PasswordLoginScreenBase: FC<PasswordLoginBaseProps> = () => {
  const { control, getValues, reset } = useForm();
  const styles = useStyles();
  const [loginUser] = useLoginUserMutation();
  const dispatch = useAppDispatch();

  const getFormValues = () => {
    const { loginName, password } = getValues();
    return {
      loginName,
      password,
    };
  };

  const handleSignInWithOTP = (OTPCode: string) => {
    const { loginName, password } = getFormValues();
    Alert.alert(`${loginName} ${password} ${OTPCode}`);
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
            setCredentials({
              accessToken: res.accessToken,
              refreshToken: res.refreshToken,
            }),
          );
          closeModal();
        }
      })
      .catch(err => {
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
            element: <OTPModal onFinished={handleSignInWithOTP} />,
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
