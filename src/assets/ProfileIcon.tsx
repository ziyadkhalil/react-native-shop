import React from 'react';
import {Svg, SvgProps, Path, Defs} from 'react-native-svg';
import {theme} from '../theme';
import {Gradient} from './Gradient';

export function ProfileIcon({
  width,
  height,
  fill = 'transparent',
  stroke = theme.colors.grey,
  ...props
}: WithGradient<SvgProps>) {
  return (
    <Svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill={props.gradient && props.gradientFill ? 'url(#0)' : fill}
      stroke={props.gradient && props.gradientStroke ? 'url(#0)' : stroke}>
      <Path
        d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <Defs>
        <Gradient colors={props.gradient || [fill, fill]} id="0" x1="0" y1="0" x2="16" y2="20" />
      </Defs>
    </Svg>
  );
}
