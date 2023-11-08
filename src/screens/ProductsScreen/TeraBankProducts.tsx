import React from 'react';
import { SectionList, SectionListRenderItem, View } from 'react-native';
import { useTheme } from 'hooks';
import { Button, CardsAndAccounts, DepositsAndLoans, Divider } from 'components';
import { useStyles } from './ProductsScreen.styles';

const accounts = [
  {
    name: 'ჩემი ანგარიში',
    balance: 1492,
    isBlocked: true,
  },
  {
    name: 'ჩემი ანგარიში',
    balance: 208.05,
    isBlocked: false,
  },
  {
    name: 'ჩემი ანგარიში',
    balance: 2710.16,
    isBlocked: false,
  },
];

const deposits = [
  {
    name: 'სახლისთვის',
    balance: 1492,
    interests: 220.08,
  },
  {
    name: 'მანქანისთვის',
    balance: 2692.03,
    interests: 220.08,
  },
];

const loans = [
  {
    name: 'იპოთეკური სესხი',
    balance: 1492,
    fee: 0,
  },
  {
    name: 'სამომხმარებლო სესხი',
    balance: 1492,
    fee: 0,
  },
  {
    name: 'ოვერდრაფტი',
    balance: 1492,
    fee: 105.3,
  },
];

const sections = [
  { title: 'accounts', data: [{}] },
  { title: 'deposits', data: [{}] },
  { title: 'loans', data: [{}] },
];

const SectionListFooter = () => {
  const styles = useStyles();
  return (
    <View style={styles.footer}>
      <Button.Primary text="products.new" fullWidth />
      <Button.Secondary
        fullWidth
        text="products.history"
        customWrapperStyle={styles.historyButton}
      />
    </View>
  );
};

const TeraBankProducts = () => {
  const styles = useStyles();
  const { Colors } = useTheme();

  const renderSectionListItem: SectionListRenderItem<any, any> = ({ section }) => {
    switch (section.title) {
      case 'accounts':
        return <CardsAndAccounts accounts={accounts} />;
      case 'deposits':
        return <DepositsAndLoans data={deposits} variant="deposit" />;
      case 'loans':
        return <DepositsAndLoans data={loans} variant="loan" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.sectionListWrapper}>
      <Divider color={Colors.white} height={24} />
      <SectionList
        bounces={false}
        sections={sections}
        renderItem={renderSectionListItem}
        ListFooterComponent={SectionListFooter}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.sectionListContent}
      />
    </View>
  );
};

export default TeraBankProducts;
