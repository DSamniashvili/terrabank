import { useStyles } from './AuthorizationMethod.styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { AuthorizationMethodType } from 'screens/AuthorizationMethodsScreen/AuthorizationMethodsScreen.types';
import { IconComponent } from 'components/IconComponent/IconComponent';
import { Controller, useForm } from 'react-hook-form';
import { SwitchComponent } from 'components/Switch/Switch';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { debounce } from 'utils/debounce';
import { SupportedAuthMethodsType } from 'store/slices/userInfo/types';
import { setAuthorizationMethod } from 'store/slices/userInfo';
import { openModal } from 'utils/modal';
import { TrustDeviceModal } from 'components/modals';

export const AuthorizationMethod = (props: AuthorizationMethodType) => {
  const { description, icon, title, methodName, requiresTrust, readOnly } = props;
  const { t } = useTranslation();
  const styles = useStyles();
  const dispatch = useAppDispatch();

  //   TODO - how to make device trusted?
  const deviceIsTrusted = true;
  // gets values from redux store
  const authorizationMethods = useAppSelector(state => state.userInfo.authorizationMethods);
  //   sets current value in currentMethodState where methodName can be sms | passcode | faceId | fingerPrint
  const currentMethodState = authorizationMethods[methodName as keyof SupportedAuthMethodsType];

  const { control, setValue } = useForm<SupportedAuthMethodsType>({
    defaultValues: {
      [methodName]: currentMethodState,
    },
  });

  /**
   *  sets new value in the state with small timeout
   */
  const debouncedDispatch = debounce(
    (formItemName: keyof SupportedAuthMethodsType, formItemValue: boolean) => {
      dispatch(setAuthorizationMethod({ key: formItemName, value: formItemValue }));
    },
    500,
  );

  /**
   *
   * @param formItemName (sms | passcode | faceId | fingerPrint)
   * @param formItemValue boolean
   *  handles value update and dispatches action with debounce
   */
  const handleChange = (formItemName: keyof SupportedAuthMethodsType, formItemValue: boolean) => {
    setValue(formItemName, formItemValue);
    debouncedDispatch(formItemName, formItemValue);
    if (formItemValue === true && requiresTrust) {
      openModal({
        title: t('trustDevice.heading'),
        element: <TrustDeviceModal methodName={methodName} />,
      });
    }
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
          disabled={readOnly}
          key={methodName}
          name={methodName as keyof SupportedAuthMethodsType}
          control={control}
          render={({ field: { value, name } }) => (
            <SwitchComponent
              disabled={readOnly && deviceIsTrusted}
              value={value}
              onValueChange={val => handleChange(name as keyof SupportedAuthMethodsType, val)}
            />
          )}
        />
      </View>
    </View>
  );
};
