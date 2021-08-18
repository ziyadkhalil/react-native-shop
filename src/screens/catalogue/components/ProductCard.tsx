import React from 'react';
import {Pressable, ViewStyle} from 'react-native';
import {Box, IBoxProps, Image} from 'native-base';
import ContentLoader, {Rect} from 'react-content-loader/native';

import {Text} from '@src/components';
import {colors} from '@src/theme';
import {screenWidth, padding} from '@src/const';

import {FavoriteButton} from './FavoriteButton';

const cardWidth = (screenWidth - padding * 3) / 2;
const cardHeight = cardWidth + 90;

type Props = (
  | {
      product: undefined;
    }
  | {
      product: Product;
      favorite: boolean;
      onFavoritePress: (id: string) => void;
      onPress: (id: string) => void;
    }
) &
  IBoxProps;

export function ProductCard(props: Props & IBoxProps) {
  if (!props.product) return <ProductCard.Loader />;
  const {onPress, onFavoritePress, product, favorite, ...boxProps} = props;
  const {image, name, price, id} = product;
  const _onPress = () => onPress(id);
  const _onFavoritePress = () => onFavoritePress(id);
  return (
    <Box {...boxProps} w={cardWidth} h={cardHeight}>
      <Pressable onPress={_onPress}>
        <Image
          alt={image.caption}
          style={{aspectRatio: 1}}
          source={{uri: image.url}}
          mb={6}
          width={cardWidth}
          borderRadius={8}
          overflow="hidden"
        />
      </Pressable>
      <FavoriteButton favorite={favorite} onPress={_onFavoritePress} pos="absolute" top={cardWidth - 18} right={4} />
      <Text numberOfLines={2} variant="body" mb={1.5}>
        {name}
      </Text>
      <Text variant="title3">{price}</Text>
    </Box>
  );
}

ProductCard.Loader = ({style, categoriesLoading}: {style?: ViewStyle; categoriesLoading?: boolean}) => (
  <ContentLoader
    style={style}
    height={cardHeight}
    fillOpacity="0.4"
    width={cardWidth}
    opacity={1}
    backgroundColor={colors.primaryGradient[1]}
    foregroundColor={colors.primaryGradient[categoriesLoading ? 1 : 0]}>
    <Rect width={cardWidth} height={cardWidth} rx={8} ry={8} />
    <Rect y={cardWidth + 28} height={11} width={cardWidth} />
    <Rect y={cardWidth + 47} height={11} width={cardWidth - 40} />
    <Rect y={cardWidth + 72} height={11} width={40} />
    <FavoriteButton favorite={false} pos="absolute" top={cardWidth - 18} right={4} />
  </ContentLoader>
);
