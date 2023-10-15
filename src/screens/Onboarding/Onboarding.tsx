import React, { FC } from 'react';
import { withLoginScreen } from 'components/HOC';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { PASSWORD_LOGIN_SCREEN } from 'navigation/ScreenNames';

interface OnboardingScreenBaseProps {
  handleNavigation?: () => Promise<void>;
}

const OnboardingScreenBase: FC<OnboardingScreenBaseProps> = ({ handleNavigation }) => {
  const { t } = useTranslation();
  return (
    <SafeAreaView>
      <View>
        <Text>{t('navigation.hello')}</Text>
        <Text>Onboarding Screen</Text>
      </View>

      <TouchableOpacity onPress={handleNavigation}>
        <Text>Move to other screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export const OnboardingScreen = withLoginScreen<
  OnboardingScreenBaseProps,
  typeof PASSWORD_LOGIN_SCREEN
>(OnboardingScreenBase, PASSWORD_LOGIN_SCREEN);
