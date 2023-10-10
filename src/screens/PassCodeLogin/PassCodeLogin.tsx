import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

interface PassCodeLoginBaseProps {
  handleLogin?: () => Promise<void>;
}

const PassCodeLoginBase: FC<PassCodeLoginBaseProps> = ({ handleLogin }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <View>
        <Text>{t('navigation.hello')}</Text>
        <Text>PassCode Login Screen</Text>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Move to Passcode login screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const PassCodeLogin = withLoginScreen<PassCodeLoginBaseProps>(PassCodeLoginBase);
