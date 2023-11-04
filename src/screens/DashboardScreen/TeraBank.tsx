import React, { FC, RefObject, useEffect, useRef } from 'react';
import { View, SectionList, SectionListRenderItem } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import Animated, {
  runOnJS,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setScrollToTop, setShouldCloseCards } from 'store/slices/dashboard';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { useTheme } from 'hooks';
import { CardsAndBalance } from 'components';
import { ITeraBankProps } from './DashboardScreen.types';
import { useStyleTheme } from './DashboardScreen.style';
import {
  Assets,
  Banker,
  Offers,
  Payments,
  Pension,
  Templates,
  Transactions,
  tempData,
} from './Sections';

const sections = [
  { title: 'templates', data: [{}] },
  { title: 'payments', data: [{}] },
  { title: 'assets', data: [{}] },
  { title: 'offers', data: [{}] },
  { title: 'pension', data: [{}] },
  { title: 'banker', data: [{}] },
  { title: 'transactions', data: [{}] },
];

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const MainBank: FC<ITeraBankProps> = ({ translateY, zIndex }) => {
  const styles = useStyleTheme();
  const { Colors } = useTheme();
  const dispatch = useAppDispatch();
  const anim = useSharedValue(0);
  const ref: RefObject<SectionList<any, any>> = useRef(null);
  const { scrollToTop } = useAppSelector(state => state.dashboard);

  useScrollToTop(ref);

  const closing = () => {
    dispatch(setShouldCloseCards(true));
  };

  const scrollToTopHandler = () => {
    ref?.current?.scrollToLocation({
      itemIndex: 0,
      viewOffset: 200,
      sectionIndex: 0,
    });
  };

  useEffect(() => {
    if (scrollToTop) {
      scrollToTopHandler();
      dispatch(setScrollToTop(false));
    }
  }, [dispatch, scrollToTop]);

  useAnimatedReaction(
    () => zIndex.value,
    result => {
      if (result === 0) {
        runOnJS(closing)();
      }
    },
    [],
  );

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateY.value = event.contentOffset.y;
    event.contentOffset.y > 5 ? (zIndex.value = 0) : (zIndex.value = 1);
  });

  const borderColor = useAnimatedStyle(() => {
    return {
      borderColor: interpolateColor(
        translateY.value,
        [0, 20],
        [Colors.dashboardBackground, Colors.overlay],
      ),
    };
  });

  const animPaddingTop = useAnimatedStyle(() => {
    const paddingTop = interpolate(anim.value, [0, 1], [230, 425]);
    return {
      paddingTop,
    };
  });

  const renderItem: SectionListRenderItem<any, any> = ({ section }) => {
    switch (section.title) {
      case 'templates':
        return <Templates data={tempData.templates} />;
      case 'payments':
        return <Payments data={tempData.payments} />;
      case 'assets':
        return <Assets data={tempData.assets} />;
      case 'offers':
        return <Offers data={tempData.offers} />;
      case 'pension':
        return <Pension />;
      case 'banker':
        return <Banker />;
      case 'transactions':
        return <Transactions data={tempData.transactions} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.wrapper}>
      <CardsAndBalance anim={anim} translateY={translateY} zIndex={zIndex} />
      <Animated.View style={[styles.sectionList, borderColor]}>
        <AnimatedSectionList
          ref={ref}
          sections={sections}
          renderItem={renderItem}
          bounces={false}
          nestedScrollEnabled
          style={animPaddingTop}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.sectionListContent}
        />
      </Animated.View>
    </View>
  );
};

export default MainBank;
