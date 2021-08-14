import React from 'react';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {TapGestureHandler, TapGestureHandlerGestureEvent as HandlerEvent} from 'react-native-gesture-handler';

import {Text} from '@src/components';
import {colors} from '@src/theme';

const AText = Animated.createAnimatedComponent(Text);

type Props = {
  item: string;
  index: number;
  activeCategoryIdx: Animated.SharedValue<number>;
};

export function CategoryTag({item, index, activeCategoryIdx}: Props) {
  const tapHandler = useAnimatedGestureHandler<HandlerEvent>(
    {
      onActive: () => (activeCategoryIdx.value = index),
    },
    [index],
  );

  const style = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(activeCategoryIdx.value === index ? colors.yellow : colors.white),
      color: withTiming(activeCategoryIdx.value === index ? colors.white : colors.darkGrey),
    }),
    [index],
  );

  return (
    <TapGestureHandler onGestureEvent={tapHandler}>
      <AText mr={2} variant="tag" style={style}>
        {item}
      </AText>
    </TapGestureHandler>
  );
}
