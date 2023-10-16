import { useStyles } from './AuthorizationMethod.styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Text, View } from 'react-native';
import { AuthorizationMethodType } from 'screens/AuthorizationMethodsScreen/AuthorizationMethodsScreen.types';
import { Radio } from 'components/Radio/Radio';
import { IconComponent } from 'components/IconComponent/IconComponent';

export const AuthorizationMethod = (props: AuthorizationMethodType) => {
  const { t } = useTranslation();
  const styles = useStyles();
  const { description, icon, name } = props;

  const handleAuthorizationMethodSelection = (item: string) => {
    Alert.alert(item);
  };
  return (
    <View key={name} style={styles.AuthorizationMethodContainer}>
      <View style={styles.AuthorizationMethodLeftContainer}>
        <View style={styles.iconContainer}>
          <IconComponent IconJSX={icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.AuthorizationMethodTitleStyle}>{t(name)}</Text>
          <Text style={styles.AuthorizationMethodDescStyle}>{t(description)}</Text>
        </View>
      </View>
      <View style={styles.AuthorizationMethodEnablerContainer}>
        <Radio
          value={name}
          isSelected={false}
          key={name}
          onPress={handleAuthorizationMethodSelection}
        />
      </View>
    </View>
  );
};
