import React from 'react';
import {Svg, SvgProps, Path, Defs, PathProps} from 'react-native-svg';

import {theme} from '@src/theme';

import {Gradient} from './Gradient';
import Animated, {Easing, useAnimatedProps, useSharedValue, withTiming} from 'react-native-reanimated';

const APath = Animated.createAnimatedComponent(Path);
export function HeartIcon({
  width = 18,
  height = 15,
  fill = theme.colors.white,
  stroke = theme.colors.grey,
  ...props
}: WithGradient<SvgProps>) {
  const animatedProps = useAnimatedProps<PathProps>(
    () => ({
      strokeDashoffset: withTiming(props.gradientStroke ? 0 : 50),
      ...(!props.gradientFill && {
        fill: withTiming(fill),
      }),
    }),
    [props.gradientStroke, props.gradientFill, fill],
  );
  return (
    <Svg width={width} height={height} viewBox="0 0 18 15">
      <Path
        d="M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48159C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.22011 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35999 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
        fill={fill}
      />
      <APath
        d="M2.59837 2.26499C2.25014 2.61321 1.97391 3.02661 1.78546 3.48159C1.597 3.93656 1.5 4.4242 1.5 4.91666C1.5 5.40912 1.597 5.89676 1.78546 6.35173C1.97391 6.80671 2.25014 7.22011 2.59837 7.56833L9.00003 13.97L15.4017 7.56833C16.105 6.86506 16.5001 5.91123 16.5001 4.91666C16.5001 3.92209 16.105 2.96826 15.4017 2.26499C14.6984 1.56173 13.7446 1.16664 12.75 1.16664C11.7555 1.16664 10.8016 1.56173 10.0984 2.26499L9.00003 3.36333L7.9017 2.26499C7.55348 1.91677 7.14008 1.64054 6.68511 1.45208C6.23013 1.26362 5.74249 1.16663 5.25003 1.16663C4.75757 1.16663 4.26993 1.26362 3.81496 1.45208C3.35999 1.64054 2.94659 1.91677 2.59837 2.26499V2.26499Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDashoffset={props.gradientStroke ? 0 : 50}
        animatedProps={animatedProps}
        strokeDasharray={[50]}
        stroke="url(#stroke)"
        fill={'url(#fill)'}
      />

      <Defs>
        <Gradient
          colors={props.gradient || [stroke, stroke]}
          id="stroke"
          x1="16.5001"
          y1="1.16663"
          x2="0.373212"
          y2="2.79233"
        />
        <Gradient
          colors={(props.gradientFill && props.gradient) || ['#fff', '#fff']}
          id="fill"
          x1="16.5001"
          y1="1.16663"
          x2="0.373212"
          y2="2.79233"
        />
      </Defs>
    </Svg>
  );
}
