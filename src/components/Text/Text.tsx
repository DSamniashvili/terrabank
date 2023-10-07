import React, { forwardRef } from 'react';
import { Text as RNText } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TextProps } from './Text.types';
import { useStyleTheme } from './Text.styles';

export const Text = forwardRef<RNText, TextProps>(
  (
    {
      children,
      color,
      size,
      lineHeight,
      uppercase,
      center,
      label,
      title,
      headline,
      secondary,
      special,
      translateProp,
      translate = true,
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const styles = useStyleTheme();
    return (
      <RNText
        ref={ref}
        style={[
          styles.default,
          label && styles.label,
          title && styles.title,
          headline && styles.headline,
          uppercase && styles.uppercase,
          secondary && styles.secondary,
          special && styles.special,
          center && styles.center,
          color ? { color } : null,
          lineHeight ? { lineHeight } : null,
          size ? { fontSize: size } : null,
        ]}
        children={translate && typeof children === 'string' ? t(children, translateProp) : children}
      />
    );
  },
);
