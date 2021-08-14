import React from 'react';
import {LinearGradient, LinearGradientProps, Stop} from 'react-native-svg';

export const Gradient = ({colors, ...props}: LinearGradientProps & {colors: [string, string]}) => {
  return colors ? (
    <LinearGradient {...props} gradientUnits="userSpaceOnUse">
      <Stop stopColor={colors[1]} />
      <Stop offset="1" stopColor={colors[0]} />
    </LinearGradient>
  ) : null;
};
