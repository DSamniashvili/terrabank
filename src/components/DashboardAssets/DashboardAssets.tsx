import React from 'react';
import { View } from 'react-native';
import { AssetsCard, Text } from 'components';
import { useStyles } from './DashboardAssets.styles';
import { useAppSelector } from 'store/hooks/useAppSelector';
import useTheme from 'hooks/useTheme';

const calculateSum = (data: Array<{ [key: string]: number }>, property: string): number => {
  return data.reduce((total, item) => total + item[property], 0);
};

const filterAssetsAndCalculateSum = (assets: any[], currencyToExclude: string) => {
  const filteredAssets = assets.filter(
    (asset: { currency: any }) => asset.currency !== currencyToExclude,
  );
  return calculateSum(filteredAssets, 'amount');
};

export const DashboardAssets = () => {
  const styles = useStyles();
  const { liabilities, creditCardLoans, loanCustomerId, assets } = useAppSelector(
    state => state.dashboard.templatesResponse,
  );
  const { Colors } = useTheme();

  const liabilitiesSum = calculateSum(liabilities, 'overdraftLimit');
  const creditCardLoansSum = calculateSum(creditCardLoans, 'creditLimit');
  const getLoanCustomerIdSum = calculateSum(loanCustomerId, 'amount');

  const assetsSum = filterAssetsAndCalculateSum(assets, 'USD');

  const totalSum = liabilitiesSum + creditCardLoansSum + getLoanCustomerIdSum;

  return (
    <View style={styles.dashboardTemplatesContainer}>
      <View style={styles.headerContainer}>
        <Text
          children={`dashboard.assets`}
          style={styles.titleContainer}
          color={Colors.textBlack}
        />
        <AssetsCard assetsSum={assetsSum} totalSum={totalSum} />
      </View>
    </View>
  );
};
