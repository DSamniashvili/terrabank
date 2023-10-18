import { useStyles } from './AuthorizationMethod.styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { AuthorizationMethodType } from 'screens/AuthorizationMethodsScreen/AuthorizationMethodsScreen.types';
import { IconComponent } from 'components/IconComponent/IconComponent';
import { Controller, useForm } from 'react-hook-form';
import { SwitchComponent } from 'components/Switch/Switch';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setAuthorizationMethod } from 'store/slices/AuthorizationMethods';
import { AuthorizationMethodsState } from 'store/slices/AuthorizationMethods/types';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { debounce } from 'utils/debounce';
import { openModal } from 'utils/modal';
import { VerifiedPhoneModal } from 'components/index';

export const AuthorizationMethod = (props: AuthorizationMethodType) => {
  const { description, icon, title, methodName } = props;
  const { t } = useTranslation();
  const styles = useStyles();
  const dispatch = useAppDispatch();

  // gets values from redux store
  const authorizationMethods = useAppSelector(state => state.authorizationMethods);
  //   sets current value in currentMethodState where methodName can be sms | passcode | faceId | biometric
  const currentMethodState = authorizationMethods[methodName as keyof AuthorizationMethodsState];

  const { control, setValue } = useForm<AuthorizationMethodsState>({
    defaultValues: {
      [methodName]: currentMethodState,
    },
  });

  /**
   *  sets new value in the state with small timeout
   */
  const debouncedDispatch = debounce(
    (formItemName: keyof AuthorizationMethodsState, formItemValue: boolean) => {
      dispatch(setAuthorizationMethod({ key: formItemName, value: formItemValue }));
    },
    500,
  );

  /**
   *
   * @param formItemName (sms | passcode | faceId | biometric)
   * @param formItemValue boolean
   *  handles value update and dispatches action with debounce
   */
  const handleChange = (formItemName: keyof AuthorizationMethodsState, formItemValue: boolean) => {
    setValue(formItemName, formItemValue);
    debouncedDispatch(formItemName, formItemValue); // Use debouncedDispatch instead of dispatch
    openModal({
      title: 'მოწყობილობის გასანდოება',
      element: <VerifiedPhoneModal />,
    });
  };

  return (
    <View style={styles.AuthorizationMethodContainer}>
      <View style={styles.AuthorizationMethodLeftContainer}>
        <View style={styles.iconContainer}>
          <IconComponent IconJSX={icon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.AuthorizationMethodTitleStyle}>{t(title)}</Text>
          <Text style={styles.AuthorizationMethodDescStyle}>{t(description)}</Text>
        </View>
      </View>
      <View style={styles.AuthorizationMethodEnablerContainer}>
        <Controller
          key={methodName}
          name={methodName as keyof AuthorizationMethodsState}
          control={control}
          render={({ field: { value, name } }) => (
            <SwitchComponent
              value={value}
              onValueChange={val => handleChange(name as keyof AuthorizationMethodsState, val)}
            />
          )}
        />
      </View>
    </View>
  );
};
