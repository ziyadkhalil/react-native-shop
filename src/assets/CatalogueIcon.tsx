import React, {SVGProps} from 'react';
import {Icon, IIconProps} from 'native-base';
import {Path, Defs, Svg, SvgProps} from 'react-native-svg';
import {colors, theme} from '../theme';
import {Gradient} from './Gradient';

export function CatalogueIcon({
  width = 18,
  height = 18,
  stroke = theme.colors.grey,
  fill = 'transparent',
  ...props
}: WithGradient<SvgProps>) {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18">
      <Path
        d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H5C5.53043 1 6.03914 1.21071 6.41421 1.58579C6.78929 1.96086 7 2.46957 7 3V5C7 5.53043 6.78929 6.03914 6.41421 6.41421C6.03914 6.78929 5.53043 7 5 7H3C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5V3Z"
        fill={props.gradient && props.gradientFill ? 'url(#0)' : fill}
        stroke={props.gradient && props.gradientStroke ? 'url(#0)' : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 3C11 2.46957 11.2107 1.96086 11.5858 1.58579C11.9609 1.21071 12.4696 1 13 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7H13C12.4696 7 11.9609 6.78929 11.5858 6.41421C11.2107 6.03914 11 5.53043 11 5V3Z"
        fill={props.gradient && props.gradientFill ? 'url(#1)' : fill}
        stroke={props.gradient && props.gradientStroke ? 'url(#1)' : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 13C1 12.4696 1.21071 11.9609 1.58579 11.5858C1.96086 11.2107 2.46957 11 3 11H5C5.53043 11 6.03914 11.2107 6.41421 11.5858C6.78929 11.9609 7 12.4696 7 13V15C7 15.5304 6.78929 16.0391 6.41421 16.4142C6.03914 16.7893 5.53043 17 5 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V13Z"
        fill={props.gradient && props.gradientFill ? 'url(#2)' : fill}
        stroke={props.gradient && props.gradientStroke ? 'url(#2)' : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 13C11 12.4696 11.2107 11.9609 11.5858 11.5858C11.9609 11.2107 12.4696 11 13 11H15C15.5304 11 16.0391 11.2107 16.4142 11.5858C16.7893 11.9609 17 12.4696 17 13V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H13C12.4696 17 11.9609 16.7893 11.5858 16.4142C11.2107 16.0391 11 15.5304 11 15V13Z"
        fill={props.gradient && props.gradientFill ? 'url(#3)' : fill}
        stroke={props.gradient && props.gradientStroke ? 'url(#3)' : stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <Gradient colors={colors.primaryGradient} id="0" x1="7" y1="1" x2="0.531623" y2="1.55657" />
        <Gradient colors={colors.primaryGradient} id="1" x1="17" y1="1" x2="10.5316" y2="1.55657" />
        <Gradient colors={colors.primaryGradient} id="2" x1="7" y1="11" x2="0.531623" y2="11.5566" />
        <Gradient colors={colors.primaryGradient} id="3" x1="17" y1="11" x2="10.5316" y2="11.5566" />
      </Defs>
    </Svg>
  );
}
