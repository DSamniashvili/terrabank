import React from 'react';
import { openModal } from 'utils/modal';
import { View } from 'react-native';
import { VerifiedPhoneIcon } from 'assets/SVGs';
import { useStyleTheme } from './VerifiedPhoneModal.styles';
import { Button, OTPModal, Text } from 'components';

export const VerifiedPhoneModal = () => {
  const verifyPhone = () => {
    openModal({
      element: <OTPModal />,
    });
  };
  const styles = useStyleTheme();

  return (
    <View style={styles.container}>
      <VerifiedPhoneIcon style={styles.icon} />
      <Text children="verify.verifyText" style={styles.text} />
      <Text children="verify.verifyLabel" style={styles.label} />
      <Button.Primary
        text="verify.verifyPhoneButton"
        size="large"
        fullWidth
        onPress={verifyPhone}
      />
    </View>
  );
};
