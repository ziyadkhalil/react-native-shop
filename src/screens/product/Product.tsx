import React from 'react';
import {Box} from 'native-base';
import {RouteProp} from '@react-navigation/native';

import {Text} from '@src/components';

type Props = {
  route: RouteProp<CatalougeStackParamList, 'Product'>;
};
export function Product({
  route: {
    params: {product},
  },
}: Props) {
  return (
    <Box px={4} py={22} flex={1}>
      <Text mb={10}>{product.name}</Text>
      <Text variant="title1">{product.price}</Text>
    </Box>
  );
}
