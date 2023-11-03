import React, { FC, RefObject, useEffect, useRef } from 'react';
import { Text, View, SectionList, FlatList, SectionListRenderItem } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import Animated, {
  runOnJS,
  interpolate,
  SharedValue,
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useAnimatedReaction,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useAppDispatch } from 'store/hooks/useAppDispatch';
import { setScrollToTop, setShouldCloseCards } from 'store/slices/Dashboard';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { useTheme } from 'hooks';
import { CardsAndBalance } from 'components';
import { useStyles } from './HomeScreen.style';

const templates = ['ჯეოსელი', 'გადარიცხვა', 'კომუნალურები', 'ინტერნეტი', 'ანაბარი'];
const payments = ['სესხის გადასახადი', 'კომუნალურები', 'სწავლის გადასახადი', 'ჯეოსელი'];
const assets = ['ანაბრები', 'სესხები'];
const offers = ['შეთავაზება 1', 'შეთავაზება 2'];
const transactions = [
  'ტრანზაქცია 1',
  'ტრანზაქცია 2',
  'ტრანზაქცია 3',
  'ტრანზაქცია 4',
  'ტრანზაქცია 5',
];

interface ITeraBankProps {
  translateY: SharedValue<number>;
  zIndex: SharedValue<number>;
}

const sections = [
  { title: 'templates', data: [{}] },
  { title: 'payments', data: [{}] },
  { title: 'assets', data: [{}] },
  { title: 'offers', data: [{}] },
  { title: 'pension', data: [{}] },
  { title: 'banker', data: [{}] },
  { title: 'transactions', data: [{}] },
];

const Templates = ({ data }: { data: string[] }) => {
  const styles = useStyles();

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={[styles.item, { borderWidth: 1, borderRadius: 10 }]}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: 'white',
      }}
    >
      <Text>შაბლონები</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const Payments = ({ data }: { data: string[] }) => {
  const styles = useStyles();

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View
        style={[
          styles.item,
          {
            height: 130,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 16,
          },
        ]}
      >
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#fff', padding: 16 }}>
      <Text>მოახლოებული გადახდები</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const Assets = ({ data }: { data: string[] }) => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            borderBottomWidth: index < data.length - 1 ? 1 : 0,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Text>{item}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#fff', padding: 16 }}>
      <Text>აქტივები და ვალდებულებები</Text>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const Offers = ({ data }: { data: string[] }) => {
  const styles = useStyles();

  const renderItem = ({ item }: { item: string }) => {
    return (
      <View
        style={[
          styles.item,
          {
            height: 130,
            borderWidth: 1,
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: 16,
            width: 200,
          },
        ]}
      >
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#fff', padding: 16 }}>
      <Text>შეთავაზებები</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          marginTop: 10,
        }}
      />
    </View>
  );
};

const Pension = () => {
  return (
    <View style={{ backgroundColor: '#fff', padding: 16 }}>
      <Text>საპენსიო ფონდი</Text>
      <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
          }}
        />
        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
          <Text children="დანაზოგი" />
          <Text children="$1000" />
        </View>
      </View>
    </View>
  );
};

const Banker = () => {
  return (
    <View style={{ backgroundColor: '#fff', padding: 16 }}>
      <Text>ჩემი ბანკირი</Text>
      <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
          }}
        />
        <View style={{ marginLeft: 10, justifyContent: 'center' }}>
          <Text children="ბანკირი" />
          <Text children="მთავარი ფილიალი" />
        </View>
      </View>
    </View>
  );
};

const Transactions = ({ data }: { data: string[] }) => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={[{ flexDirection: 'row', marginTop: 20 }]}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            borderBottomWidth: index < data.length - 1 ? 1 : 0,
            borderBottomColor: 'lightgrey',
          }}
        >
          <Text>{item}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: '#fff', padding: 16 }}>
      <Text>ბოლო ტრანზაქციები</Text>
      <FlatList data={data} renderItem={renderItem} />
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderRadius: 20,
          marginTop: 20,
          padding: 5,
          alignItems: 'center',
          borderColor: 'lightgrey',
        }}
      >
        <Text children="ყველა" style={{ color: '#922a69', fontWeight: '600' }} />
      </View>
    </View>
  );
};

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const MainBank: FC<ITeraBankProps> = ({ translateY, zIndex }) => {
  const styles = useStyles();
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
    const paddingTop = interpolate(anim.value, [0, 1], [225, 420]);
    return {
      paddingTop,
    };
  });

  const renderItem: SectionListRenderItem<any, any> = ({ section }) => {
    switch (section.title) {
      case 'templates':
        return <Templates data={templates} />;
      case 'payments':
        return <Payments data={payments} />;
      case 'assets':
        return <Assets data={assets} />;
      case 'offers':
        return <Offers data={offers} />;
      case 'pension':
        return <Pension />;
      case 'banker':
        return <Banker />;
      case 'transactions':
        return <Transactions data={transactions} />;
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
