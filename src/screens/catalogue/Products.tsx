import React, {useState} from 'react';
import {Box} from 'native-base';
import {FlatList, ListRenderItem} from 'react-native';
import Animated, {runOnJS, useAnimatedReaction} from 'react-native-reanimated';

import {padding} from '@src/const';

import {ProductCard} from './components';
import {useProductsInfiniteQuery} from './hooks';

type Props = {
  activeCategoryIdSv: Animated.SharedValue<string>;
};

export function Products({activeCategoryIdSv}: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const products = useProductsInfiniteQuery(activeCategoryId);

  const categoriesLoading = !activeCategoryId;

  useAnimatedReaction(
    () => activeCategoryIdSv.value,
    index => runOnJS(setActiveCategoryId)(index),
    [],
  );

  const ListFooterComponent =
    categoriesLoading || products.isLoading || products.isFetchingNextPage ? (
      <Loader categoriesLoading={categoriesLoading} />
    ) : null;

  return (
    <FlatList
      numColumns={2}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      style={nmr}
      keyExtractor={keyExtractor}
      renderItem={renderProduct}
      columnWrapperStyle={mb}
      data={products.data?.pages.flat()}
      ListFooterComponent={ListFooterComponent}
      onEndReachedThreshold={1}
      onEndReached={() => products.fetchNextPage()}
    />
  );
}

const keyExtractor = ({id}: Product) => `${id}`;

const renderProduct: ListRenderItem<Product> = ({item: product}) => <ProductCard mr={padding / 4} {...product} />;

const Loader = ({categoriesLoading}: {categoriesLoading: boolean}) => (
  <Box flexDirection="row" flexWrap="wrap">
    <ProductCard.Loader categoriesLoading={categoriesLoading} style={loaderStyle} />
    <ProductCard.Loader categoriesLoading={categoriesLoading} style={loaderStyle} />
    <ProductCard.Loader categoriesLoading={categoriesLoading} style={loaderStyle} />
    <ProductCard.Loader categoriesLoading={categoriesLoading} style={loaderStyle} />
  </Box>
);

const nmr = {
  marginRight: -padding,
};
const mb = {
  marginBottom: 24,
};
const loaderStyle = {
  ...mb,
  marginEnd: padding,
};
