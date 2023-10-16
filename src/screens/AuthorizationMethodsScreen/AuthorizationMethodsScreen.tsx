import React from 'react';
import { View } from 'react-native';
import { AuthorizationMethodsScreenOptions } from './AuthorizationMethodsScreen.config';
import { useStyleTheme } from './AuthorizationMethodsScreen.styles';
import { AuthorizationMethodType } from './AuthorizationMethodsScreen.types';
import { AuthorizationMethod } from 'components/index';

export const AuthorizationMethodsScreen = () => {
  const styles = useStyleTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {AuthorizationMethodsScreenOptions?.map((method: AuthorizationMethodType) => (
          <AuthorizationMethod {...method} />
        ))}
      </View>
    </View>
  );
};
