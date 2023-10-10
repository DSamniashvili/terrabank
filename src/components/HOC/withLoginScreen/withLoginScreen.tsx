import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import React, { ComponentType } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyleTheme } from './withLoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { GuestStackScreenProps } from 'navigation/types';
import { PASSWORD_LOGIN_SCREEN } from 'navigation/ScreenNames';

interface WithLoginScreenProps {
  handleLogin?: () => void;
}

/**
 *
 * @param WrappedComponent  - a React component
 * @returns React component - with extended behavior - (with handleLogin optinal function) and shared UI styles
 */
export const withLoginScreen = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: WithLoginScreenProps) => {
    const styles = useStyleTheme();
    const { navigate } = useNavigation<GuestStackScreenProps<'Onboarding'>>();

    // TODO - temp solution - will be moved to other file
    const fakeLogin = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    };

    const handleLogin = async () => {
      try {
        await fakeLogin();
        navigate(PASSWORD_LOGIN_SCREEN);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Login failed', error);
      }
    };

    return (
      <SafeAreaView style={styles.loginScreenContainerStyle}>
        <View style={styles.loginScreenWrapperStyle}>
          <View style={styles.languageSwitcherContainer}>
            <LanguageSwitcher />
          </View>
          <View>
            <WrappedComponent {...(props as P)} handleLogin={handleLogin} />
          </View>
        </View>
      </SafeAreaView>
    );
  };
};
