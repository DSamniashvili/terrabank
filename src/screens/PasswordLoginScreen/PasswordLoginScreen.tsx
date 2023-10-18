import React, { FC, useEffect } from 'react';
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

const PasswordLoginScreenBase: FC<PasswordLoginBaseProps> = ({ handleNavigation }) => {
  const [loginUser, { isError, error }] = useLoginUserMutation();
  const accessToken = getAccessToken();

  //   const { control, handleSignUp } = usePasswordLogin();
  const { control, getValues } = useForm();
  const styles = useStyles();

  const handleSignIn = () => {
    const { loginName = 'mrtavadze', password = '123456' } = getValues();
    loginUser({ loginName, password })
      .unwrap()
      .then(res => {
        if (res.success && res.accessToken === null && accessToken === undefined) {
          handleNavigation?.();
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  useEffect(() => {
    if (isError && error && error) {
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
