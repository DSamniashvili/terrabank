import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

export const PaddedView = ({ style = null, ...props }) => {
  const mergedStyles = useMemo(() => [styles.padded, style], [style]);
  return <View style={mergedStyles} {...props} />;
};

const styles = StyleSheet.create({
  padded: {
    paddingHorizontal: 16,
  },
});

export default PaddedView;
