/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useInterpolate } from '../../AnimatedHelper';
import { HEIGHT_HOLE } from '../constant';
import { IconDot } from './IconDot';
import { styles } from './style';

const DotComponent = props => {
  // props
  const {
    selectedIndex,
    routes,
    progress,
    width,
    dotColor,
    dotSize,
    barHeight,
    isRtl,
    navigationIndex
  } = props; // const

  const {
    bottom
  } = useSafeAreaInsets();
  const inputRange = useMemo(() => routes.map((_, index) => index), [routes]);
  const outputRange = useMemo(() => isRtl ? routes.map((_, index) => -(index * width / routes.length + width / routes.length / 2 - dotSize / 2)) : routes.map((_, index) => index * width / routes.length + width / routes.length / 2 - dotSize / 2), [isRtl, routes, width, dotSize]); // reanimated

  const translateX = useInterpolate(selectedIndex, inputRange, outputRange);
  const translateY = useInterpolate(progress, [0, 1], [15 - bottom, -(barHeight - HEIGHT_HOLE + 5)]);
  const opacity = useInterpolate(progress, [0, 1], [0.2, 1]); // reanimated style

  const iconContainerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    justifyContent: 'center',
    alignItems: 'center'
  }));
  const dotStyle = useAnimatedStyle(() => ({
    width: dotSize,
    backgroundColor: dotColor,
    height: dotSize,
    bottom: 0,
    borderRadius: dotSize / 2,
    transform: [{
      translateX: translateX.value
    }, {
      translateY: translateY.value
    }]
  })); // render

  return /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.dot, dotStyle]
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: iconContainerStyle
  }, routes.map(({
    icon
  }, index) => /*#__PURE__*/React.createElement(IconDot, {
    key: index,
    index: index,
    selectedIndex: selectedIndex
  }, icon({
    progress,
    focused: navigationIndex === index
  })))));
};

export const Dot = /*#__PURE__*/memo(DotComponent, isEqual);
//# sourceMappingURL=Dot.js.map