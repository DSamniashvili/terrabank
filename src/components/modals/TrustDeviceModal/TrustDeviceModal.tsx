import React, { FC } from 'react';
import { closeModal, openModal } from 'utils/modal';
import { View } from 'react-native';
import { VerifiedPhoneIcon } from 'assets/SVGs';
import { useStyleTheme } from './TrustDeviceModal.styles';
import { Button, Text } from 'components';

import { useTranslation } from 'react-i18next';
import { TrustDeviceModalProps } from './types/TrustDeviceModal.types';
import { getTrustMethodName } from './utils/getTrustMethodName';
import { useAddTrustedDeviceMutation } from 'services/apis';
import { OTPModalTemp } from '../OTPModal/OTPModalTemp';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setUserCredentials } from 'store/slices/userInfo';

export const TrustDeviceModal: FC<TrustDeviceModalProps> = ({ methodName, handleNavigation }) => {
  const { t } = useTranslation();
  const [addTrustedDevice] = useAddTrustedDeviceMutation();
  const dispatch = useAppDispatch();

  const handleOTPVerification = (deviceToken?: string) => (OTPCode: string) => {
    addTrustedDevice({
      headers: {
        'X-Bank-Otp': OTPCode,
        'X-Bank-userip': '1',
        'X-Bank-Getauthmethod': 'false',
        'X-Bank-Sendotp': 'false',
        'X-Bank-Isstrongauthrequest': 'false',
        'X-Bank-DeviceToken': deviceToken,
      },
    }).then(res => {
      if ('data' in res) {
        const { accessToken, refreshToken } = res.data;
        if (accessToken && refreshToken) {
          dispatch(
            setUserCredentials({
              accessToken,
              refreshToken,
              deviceToken,
            }),
          );
        }
      }
      closeModal();
      handleNavigation?.();
    });
  };

  const handleTrustDevice = () => {
    addTrustedDevice({
      headers: {
        'X-Bank-userip': '1',
        'X-Bank-Getauthmethod': 'true',
        'X-Bank-Sendotp': 'true',
        'X-Bank-Isstrongauthrequest': 'true',
      },
    }).then(res => {
      if ('data' in res) {
        const { deviceToken } = res.data;
        openModal({
          element: <OTPModalTemp onFinished={handleOTPVerification(deviceToken)} />,
        });
      }
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
      <Button.Primary
        text="trustDevice.CTAText"
        size="large"
        fullWidth
        onPress={handleTrustDevice}
      />
    </View>
  );
};
