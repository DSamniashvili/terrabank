import React from 'react';
import { SectionList, SectionListRenderItem, StyleSheet, View } from 'react-native';
import { TransferTemplates, ChooseService, LastTransactions } from 'components';
import { useTheme } from 'hooks';

const sections = [
  { title: 'services', data: [{}] },
  { title: 'templates', data: [{}] },
  { title: 'transfers', data: [{}] },
];

export const TransactionsScreen = () => {
  const styles = useStyles();

  const renderItem: SectionListRenderItem<any, any> = ({ section }) => {
    switch (section.title) {
      case 'services':
        return <ChooseService />;
      case 'templates':
        return <TransferTemplates />;
      case 'transfers':
        return <LastTransactions />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.sectionListContent}
        style={{ paddingTop: 30 }}
      />
    </View>
  );
};

const useStyles = () => {
  const { Colors, Layout, Spacing } = useTheme();

  return StyleSheet.create({
    container: {
      ...Layout.fill,
      backgroundColor: Colors.headerBackground,
    },
    sectionListContent: {
      ...Layout.overflowHidden,
      paddingBottom: 70,
      borderTopLeftRadius: Spacing.ml,
      borderTopRightRadius: Spacing.ml,
      backgroundColor: '#fff',
    },
  });
};
