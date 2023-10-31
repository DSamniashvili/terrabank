import React from 'react';
import { View } from 'react-native';
import { CardItem, Text } from 'components';
import { useStyles } from './DashboardPensionFund.styles';
import useTheme from 'hooks/useTheme';
import Images from 'theme/Images';

export const DashboardPensionFund = () => {
  const styles = useStyles();

  const { Colors } = useTheme();

  const totalValue = 6023.23;

  return (
    <View style={styles.dashboardTemplatesContainer}>
      <View>
        <Text
          children={`dashboard.pension`}
          style={styles.titleContainer}
          color={Colors.textBlack}
        />
        <View style={styles.wrapper}>
          <CardItem
            title="დანაზოგი"
            value={totalValue}
            iconSource={Images().PensionIcon}
            isSecure
          />
        </View>
      </View>
    </View>
  );
};
