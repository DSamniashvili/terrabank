import React from 'react';
import { View } from 'react-native';
import { useStyles } from './TemplateCard.styles';
import { IconComponent, Text } from 'components';

export const TemplateCard = (props: any) => {
  const { name, icon, description, isLastItem } = props;
  const styles = useStyles();

  return (
    <View style={[styles.templateCardContainer, isLastItem && styles.discardRightMargin]}>
      <IconComponent pngLocalIcon={icon} />
      <View style={styles.templateCardContentContainer}>
        <Text
          children={name}
          style={styles.templateCardTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        />
        <Text
          children={description}
          style={styles.templateCardContent}
          numberOfLines={1}
          ellipsizeMode="tail"
        />
      </View>
    </View>
  );
};
