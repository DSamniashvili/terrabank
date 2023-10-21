import React, { FC, useEffect, useState } from 'react';
import { Animated, LayoutChangeEvent, Pressable, View } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import useStyles from './TabBar.styles';

const DISTANCE_BETWEEN_TABS = 25;

const TabBar: FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation, position }) => {
  const styles = useStyles();
  const [firstTabWidth, setFirstTabWidth] = useState(0);
  const [secondTabWidth, setSecondTabWidth] = useState(0);
  const [transform, setTransform] = useState<any[]>([]);

  useEffect(() => {
    if (firstTabWidth && secondTabWidth) {
      const translateX = position.interpolate({
        inputRange: [0, 1],
        outputRange: [
          0,
          firstTabWidth + DISTANCE_BETWEEN_TABS + (secondTabWidth - firstTabWidth) / 2,
        ],
      });
      const scaleX = position.interpolate({
        inputRange: [0, 1],
        outputRange: [1, secondTabWidth / firstTabWidth],
      });
      setTransform([{ translateX }, { scaleX }]);
    }
  }, [firstTabWidth, position, secondTabWidth]);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true, params: {} });
          }
        };

        const onLayout = (event: LayoutChangeEvent, idx: number) => {
          const { width } = event.nativeEvent.layout;
          if (idx === 0) {
            setFirstTabWidth(width);
          } else {
            setSecondTabWidth(width);
          }
        };

        const opacity = position.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1].map(i => (i === index ? 1 : 0.5)),
        });

        return (
          <Pressable key={index} onPress={onPress} style={styles.tab}>
            <Animated.Text
              onLayout={e => onLayout(e, index)}
              style={[{ opacity }, isFocused ? styles.active : styles.inactive]}
            >
              {label as string}
            </Animated.Text>
          </Pressable>
        );
      })}
      <View style={styles.divider} />
      <Animated.View
        style={[
          styles.indicator,
          {
            width: firstTabWidth,
            transform,
          },
        ]}
      />
    </View>
  );
};

export default TabBar;
