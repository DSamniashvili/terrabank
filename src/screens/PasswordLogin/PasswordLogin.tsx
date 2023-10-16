import React, { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Text, ControlledInput } from 'components';
import { withLoginScreen } from 'components/HOC';
import { PasswordLoginBaseProps } from './PasswordLogin.types';
import useStyles from './PasswordLogin.styles';
import { usePasswordLogin } from './usePasswordLogin';
import { removeValue } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';
import { PASSCODE_LOGIN_SCREEN } from 'navigation/ScreenNames';

const PasswordLoginBase: FC<PasswordLoginBaseProps> = ({ handleNavigation }) => {
  const { control, handleSignUp } = usePasswordLogin();
  // handleSignIn changed with handleNavigation
  const styles = useStyles();

  return (
    <View style={styles.wrapper}>
      <Text children="common:passAuth.auth" headline />
      <Text children="common:passAuth.personalData" secondary marginTop={4} />
      <ControlledInput
        control={control}
        name="username"
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
        <Button.Primary text="common:passAuth.signin" onPress={handleNavigation} fullWidth />
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text children="common:passAuth.or" label special style={styles.text} />
          <View style={styles.divider} />
        </View>
        <Button.Secondary text="common:passAuth.signup" onPress={handleSignUp} fullWidth />
      </View>
      <Pressable onPress={() => removeValue(APP_LAUNCHED)}>
        <Text children="Start with onboarding" marginTop={20} />
      </Pressable>
    </View>
  );
};

export const PasswordLogin = withLoginScreen<PasswordLoginBaseProps, typeof PASSCODE_LOGIN_SCREEN>(
  PasswordLoginBase,
  PASSCODE_LOGIN_SCREEN,
);
