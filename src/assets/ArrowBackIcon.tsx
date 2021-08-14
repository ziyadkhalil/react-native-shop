import React from 'react';
import {Icon, IIconProps} from 'native-base';
import {Path} from 'react-native-svg';
import {theme} from '../theme';

export function ArrowBackIcon({width = 18, height = 18, stroke = theme.colors.white, ...props}: IIconProps) {
  return (
    <Icon width={width} height={height} viewBox="0 0 20 14" {...props}>
      <Path
        d="M1 7.40005H19M8 13L1 7.40005L8 13ZM1 7.40005L8 1.80005L1 7.40005Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={stroke}
      />
    </Icon>
  );
}
