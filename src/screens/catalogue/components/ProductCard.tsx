import React, {useState} from 'react';
import {Box, IconButton, Image, Pressable} from 'native-base';

import {Text} from '@src/components';
import {HeartIcon} from '@src/assets';
import {colors} from '@src/theme';
import {FavoriteButton} from './FavoriteButton';

export function ProductCard() {
  const [favorite, setFavorite] = useState(false);
  const onFavoritePress = () => setFavorite(old => !old);
  return (
    <>
      <Box mb={6}>
        <Image
          alt="Prudct image"
          source={{uri: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'}}
          w={163}
          height={163}
          borderRadius={8}
          overflow="hidden"
        />
        <FavoriteButton favorite={favorite} onPress={onFavoritePress} pos="absolute" bottom={-18} right={4} />
      </Box>
      <Text numberOfLines={2} variant="body" mb={2}>
        Saodimallsu Womens Turtleneck Oversized Womens Turtleneck Oversized Womens Turtleneck Oversized Womens
        Turtleneck Oversized
      </Text>
      <Text variant="title3">$89.99</Text>
    </>
  );
}
