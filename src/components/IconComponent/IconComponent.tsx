import React from 'react';
import { Pressable } from 'react-native';
import { useStyleTheme } from './IconComponent.styles';
import { SvgProps } from 'react-native-svg';

export type IconComponentProps = {
  handler?: () => void;
  IconJSX?: (props: SvgProps) => React.JSX.Element;
  native?: boolean;
};

export const IconComponent = ({ handler, IconJSX, native }: IconComponentProps) => {
  const styles = useStyleTheme();
  return (
    <Pressable
      onPress={handler}
      style={[styles.iconCommonStyles, !native && styles.iconRoundedStyles]}
    >
      {IconJSX && <IconJSX width={16} height={16} />}
    </Pressable>
  );
};
