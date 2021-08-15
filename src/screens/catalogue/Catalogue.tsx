import {NavigationProp} from '@react-navigation/native';
import {Box} from 'native-base';
import React from 'react';
import {useSharedValue} from 'react-native-reanimated';

import {padding} from '@src/const';

import {Categories} from './Categories';
import {Products} from './Products';

type Props = {
  navigation: NavigationProp<CatalougeStackParamList, 'Catalogue'>;
};

export function Catalogue({navigation}: Props) {
  const activeCategoryIdSv = useSharedValue('');
  return (
    <Box flex={1} px={padding / 4}>
      <Categories activeCategoryIdSv={activeCategoryIdSv} />
      <Products activeCategoryIdSv={activeCategoryIdSv} />
    </Box>
  );
}
