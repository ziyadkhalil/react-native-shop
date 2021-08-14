import React from 'react';
import {IPressableProps} from 'native-base/lib/typescript/components/primitives';
import {Pressable} from 'native-base';

import {HeartIcon} from '@src/assets';
import {colors} from '@src/theme';

type Props = IPressableProps & {favorite: boolean};

export function FavoriteButton({favorite, ...props}: Props) {
  const favoriteStyle = favorite
    ? {stroke: colors.yellow, fill: colors.yellow}
    : {gradientStroke: true, stroke: colors.yellow};

  return (
    <Pressable
      w={9}
      h={9}
      borderRadius={9 * 0.5 * 4}
      shadow="5"
      bgColor={'white'}
      alignItems="center"
      justifyContent="center"
      {...props}>
      <HeartIcon gradient={colors.primaryGradient} {...favoriteStyle} />
    </Pressable>
  );
}
