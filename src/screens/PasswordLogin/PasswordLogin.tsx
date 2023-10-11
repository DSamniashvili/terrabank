import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { removeValue } from 'storage/index';
import { APP_LAUNCHED } from 'storage/constants';

interface PasswordLoginBaseProps {
  handleLogin?: () => Promise<void>;
}

const PasswordLoginBase: FC<PasswordLoginBaseProps> = ({ handleLogin }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <View>
        <Text>{t('navigation.hello')}</Text>
        <Text>Password Login Screen</Text>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Move to Passcode login screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => removeValue(APP_LAUNCHED)}>
        <Text>Start with onboarding</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const PasswordLogin = withLoginScreen<PasswordLoginBaseProps>(PasswordLoginBase);
