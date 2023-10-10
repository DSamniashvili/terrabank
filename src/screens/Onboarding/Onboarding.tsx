import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

interface OnboardingScreenBaseProps {}

const OnboardingScreenBase: FC<OnboardingScreenBaseProps> = ({
  handleLogin,
}: {
  handleLogin?: () => Promise<void>;
}) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <View>
        <Text>{t('navigation.hello')}</Text>
        <Text>Onboarding Screen</Text>
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text>Move to other screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const OnboardingScreen = withLoginScreen<OnboardingScreenBaseProps>(OnboardingScreenBase);
