import React from 'react';
import { View } from 'react-native';
import { useStyles } from './AssetsCard.styles';
import { IconComponent, Text } from 'components';
import Images from 'theme/Images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AssetsCardProps, CardItemProps } from './AssetsCard.types';

const CardItem: React.FC<CardItemProps> = ({ title, value, iconSource }) => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.iconView}>
        <IconComponent
          pngLocalIcon={iconSource}
          customIconComponentStyles={styles.customIconComponentStyles}
        />
        <View style={styles.templateCardContentContainer}>
          <Text
            children={title}
            style={styles.templateCardTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          />
          <Text
            children={value}
            style={styles.templateCardAmount}
            numberOfLines={1}
            ellipsizeMode="tail"
          />
        </View>
      </View>
      <View>
        <IconComponent
          native
          pngLocalIcon={Images().ChevronRight}
          customIconComponentStyles={styles.customIconComponentStyles}
        />
      </View>
    </TouchableOpacity>
  );
};

export const AssetsCard: React.FC<AssetsCardProps> = ({ assetsSum, totalSum }) => {
  const styles = useStyles();

  return (
    <View style={styles.templateCardContainer}>
      <CardItem title="ანაბრები" value={assetsSum} iconSource={Images().AssetsIcon} />
      <View style={styles.underline} />
      <CardItem title="სესხები" value={totalSum} iconSource={Images().LiabilitiesIcon} />
    </View>
  );
};
