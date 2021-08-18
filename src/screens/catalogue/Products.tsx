import React, {useState, useEffect, useRef} from 'react';
import {Box} from 'native-base';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import {padding} from '@src/const';

import {ProductCard} from './components';
import {useProductsInfiniteQuery} from './hooks';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type Props = {
  activeCategoryIdSv: Animated.SharedValue<string>;
};

const AFlatList = Animated.createAnimatedComponent<FlatListProps<Product>>(FlatList);

type Navigation = NavigationProp<CatalougeStackParamList, 'Catalogue'>;
export function Products({activeCategoryIdSv}: Props) {
  const navigation = useNavigation<Navigation>();
  const [activeCategoryId, setActiveCategoryId] = useState('');
  const scrollYMemo = useRef<Record<string, number>>({});
  const products = useProductsInfiniteQuery(activeCategoryId);

  const categoriesLoading = !activeCategoryId;

  const yOffset = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler(e => (yOffset.value = e.contentOffset.y));

  function onActiveCategoryChange(id: string, lastY: number) {
    scrollYMemo.current = {...scrollYMemo.current, [activeCategoryId]: lastY};
    setActiveCategoryId(id);
  }

  useAnimatedReaction(
    () => activeCategoryIdSv.value !== activeCategoryId && activeCategoryIdSv.value,
    id => {
      id && runOnJS(onActiveCategoryChange)(id, yOffset.value);
    },
    [onActiveCategoryChange],
  );

  const ListFooterComponent =
    categoriesLoading || products.isLoading || products.isFetchingNextPage ? (
      <Loader categoriesLoading={categoriesLoading} />
    ) : null;

  const ref = useAnimatedRef<FlatList>();

  useEffect(() => {
    requestAnimationFrame(() =>
      ref.current?.scrollToOffset({offset: scrollYMemo.current[activeCategoryId], animated: false}),
    );
  }, [activeCategoryId]);

  const renderProduct: ListRenderItem<Product> = React.useMemo(
    () =>
      ({item: product}) =>
        <ProductCard onPress={() => navigation.navigate('Product', {product})} mr={padding / 4} product={product} />,
    [navigation],
  );

  return (
    <AFlatList
      ref={ref}
      onScroll={onScroll}
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
