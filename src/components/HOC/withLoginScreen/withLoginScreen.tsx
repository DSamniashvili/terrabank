import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import React, { ComponentType } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyleTheme } from './withLoginScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { GuestStackScreenProps, GuestStackParamList } from 'navigation/types';

interface WithLoginScreenProps {
  handleNavigation?: () => void;
}

/**
 *
 * @param WrappedComponent  - a React component
 * @returns React component - with extended behavior - (with handleNavigation optinal function) and shared UI styles
 */
export const withLoginScreen = <P extends object, T extends keyof GuestStackParamList>(
  WrappedComponent: ComponentType<P>,
  screenName: T,
) => {
  return (props: WithLoginScreenProps) => {
    const styles = useStyleTheme();
    const { navigate } = useNavigation<GuestStackScreenProps<T>>();

    const fakeLogin = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(true);
        }, 1000);
      });
    };

    const handleNavigation = async () => {
      try {
        await fakeLogin();
        if (screenName) {
          navigate(screenName as keyof GuestStackParamList);
        }
      } catch (error) {
        console.error('Login failed', error);
      }
    };

    return (
      <SafeAreaView style={styles.loginScreenContainerStyle}>
        <View style={styles.loginScreenWrapperStyle}>
          <View style={styles.languageSwitcherContainer}>
            <LanguageSwitcher />
          </View>
          <View style={styles.wrappedComponentWrapperStyle}>
            <WrappedComponent {...(props as P)} handleNavigation={handleNavigation} />
          </View>
        </View>
      </SafeAreaView>
    );
  };
};
