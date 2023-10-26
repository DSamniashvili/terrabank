import React, { FC } from 'react';
import { openModal } from 'utils/modal';
import { View } from 'react-native';
import { VerifiedPhoneIcon } from 'assets/SVGs';
import { useStyleTheme } from './TrustDeviceModal.styles';
import { Button, OTPModal, Text } from 'components';

import { useTranslation } from 'react-i18next';
import { TrustDeviceModalProps } from './types/TrustDeviceModal.types';
import { getTrustMethodName } from './utils/getTrustMethodName';
import { useAddTrustedDeviceMutation } from 'services/apis';

export const TrustDeviceModal: FC<TrustDeviceModalProps> = ({ methodName }) => {
  const { t } = useTranslation();
  const [addTrustedDevice] = useAddTrustedDeviceMutation();

  const handleSetPasscode = () => {};

  const trustDevice = () => {
    addTrustedDevice({});
    openModal({
      element: <OTPModal onFinished={handleSetPasscode} />,
    });
  };
  const styles = useStyleTheme();

  return (
    <View style={styles.container}>
      <VerifiedPhoneIcon style={styles.icon} />
      <Text style={styles.text}>
        {t('trustDevice.title', { name: methodName ? t(getTrustMethodName(methodName)) : '' })}
      </Text>
      <Text children="trustDevice.description" style={styles.label} />
      <Button.Primary text="trustDevice.CTAText" size="large" fullWidth onPress={trustDevice} />
    </View>
  );
};
