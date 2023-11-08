import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './ProductsScreen.style';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { changeTheme } from 'store/slices/theme';
import useTheme from 'hooks/useTheme';
import { useNavigation } from '@react-navigation/native';
import { MODAL_SCREEN_ONE, MODAL_STACK } from 'navigation/ScreenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamsList } from 'navigation/types';

export const ProductsScreen = () => {
  const dispatch = useAppDispatch();
  const { Fonts, darkMode: isDark } = useTheme();
  const { navigate } = useNavigation<StackNavigationProp<MainStackParamsList>>();

import React, { useRef } from 'react';
import { ProductsTabBar } from 'components';
import { FlatList, ListRenderItem } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { config } from 'utils/config';
import TeraBankProducts from './TeraBankProducts';
import OtherBanksProducsts from './OtherBanksProducsts';

export const ProductsScreen = () => {
  const flatlistRef = useRef<FlatList>(null);
  const translateX = useSharedValue(0);


  const renderItem: ListRenderItem<string> = ({ item }) => {
    switch (item) {
      case 'terabank':
        return <TeraBankProducts />;
      case 'otherbanks':
        return <OtherBanksProducsts />;
      default:
        return null;
    }
  };

  const onTabPress = (index: number) => {
    translateX.value = withTiming(index * config.mobileWidth);
    flatlistRef.current?.scrollToOffset({
      animated: true,
      offset: index * config.mobileWidth,
    });
  };

  const handleOpenModal = () => {
    navigate(MODAL_STACK, { screen: MODAL_SCREEN_ONE });
  };

  return (

    <View style={styles.container}>
      <Text style={[Fonts.textSmall]}>Products main Screen</Text>
      <Pressable onPress={onChangeTheme}>
        <Text style={[Fonts.textSmall]} children="Change theme" />
      </Pressable>
      <Pressable onPress={handleOpenModal}>
        <Text style={[Fonts.textSmall]} children="Open modal screen" />
      </Pressable>
    </View>

    <>
      <ProductsTabBar onTabPress={onTabPress} translateX={translateX} />
      <FlatList
        horizontal
        pagingEnabled
        ref={flatlistRef}
        scrollEnabled={false}
        initialNumToRender={1}
        scrollEventThrottle={16}
        renderItem={renderItem}
        data={['terabank', 'otherbanks']}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
