import React from 'react';
import { SectionList, SectionListRenderItem } from 'react-native';
import { Button, CardsAndAccounts, Offers } from 'components';
import { useStyles } from './AllAcountsAndCardsScreen.styles';
import { Plus } from 'assets/SVGs';
import { Colors } from 'theme/Variables';

const sections = [
  { title: 'accounts', data: [{}] },
  { title: 'offers', data: [{}] },
];

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

const offers = [
  {
    title: 'ბარათის დაზღვევა',
    desc: 'დააზღვიეთ სადებეტო ბარათი ბანკში მისვლის გარეშე',
  },
  {
    title: 'ბარათის დაზღვევა',
    desc: 'დააზღვიეთ სადებეტო ბარათი ბანკში მისვლის გარეშე',
  },
  {
    title: 'ბარათის დაზღვევა',
    desc: 'დააზღვიეთ სადებეტო ბარათი ბანკში მისვლის გარეშე',
  },
  {
    title: 'ბარათის დაზღვევა',
    desc: 'დააზღვიეთ სადებეტო ბარათი ბანკში მისვლის გარეშე',
  },
];

const LeftIcon = () => <Plus color={Colors.white} />;

const ListFooter = () => {
  const styles = useStyles();
  return (
    <Button.Primary
      fullWidth
      text="products.newAccount"
      customWrapperStyle={styles.button}
      leftIcon={LeftIcon}
    />
  );
};

export const AllAcountsAndCardsScreen = () => {
  const styles = useStyles();

  const renderItem: SectionListRenderItem<any, any> = ({ section }) => {
    switch (section.title) {
      case 'accounts':
        return (
          <CardsAndAccounts
            accounts={accounts}
            showTitle={false}
            showFooter={false}
            showDivider={offers.length > 0}
          />
        );
      case 'offers':
        return <Offers data={offers} />;
      default:
        return null;
    }
  };

  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      ListFooterComponent={ListFooter}
      style={styles.list}
      ListFooterComponentStyle={styles.footer}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AllAcountsAndCardsScreen;
