import React, { useState } from 'react';
import { View } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Text } from 'components';
import { ResendIcon } from 'assets/SVGs';
import { useStyleTheme } from './OTPModal.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const OTPModal = () => {
  const styles = useStyleTheme();
  const [otpCode, setOtpCode] = useState('');

  const handleCodeFilled = (code: React.SetStateAction<string>) => {
    setOtpCode(code);
  };

  return (
    <View style={styles.container}>
      <Text children="resend.text" style={styles.text} />
      <View style={{ width: '80%' }}>
        <Text children="resend.label" style={styles.label} />
      </View>
      <OTPInputView
        style={styles.OTPView}
        pinCount={6}
        autoFocusOnLoad
        code={otpCode}
        onCodeChanged={code => setOtpCode(code)}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={handleCodeFilled}
      />
      <TouchableOpacity style={styles.resendView}>
        <ResendIcon />
        <Text children="ხელახლა გაგზავნა" style={styles.resendText} />
      </TouchableOpacity>
    </View>
  );
};
