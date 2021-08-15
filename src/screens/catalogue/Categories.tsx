import React, {useRef} from 'react';

import {Box} from 'native-base';
import {FlatList, TextStyle, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import ContentLoader, {Rect} from 'react-content-loader/native';

import {colors, textVariants} from '@src/theme';
import {CategoryTag} from './components/CategoryTag';
import {useCategoriesQuery} from './hooks/useCategoriesQuery';

type Props = {
  activeCategoryIdSv: Animated.SharedValue<string>;
};

export function Categories({activeCategoryIdSv}: Props) {
  const activeCategoryIdx = useSharedValue(0);
  const categories = useCategoriesQuery();

  const productCount = useDerivedValue(
    () =>
      withTiming(categories.data?.[activeCategoryIdx.value].productCount ?? 0, {
        duration: 1000,
      }),
    [categories.data],
  );

  const productCountText = useDerivedValue(() => {
    return `${Number(productCount.value.toFixed()).toLocaleString()} items`;
  }, [categories.data]);

  const ref = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => ref?.current?.scrollToIndex({index, viewPosition: 0.5});

  useAnimatedReaction(
    () => activeCategoryIdx.value,
    index => {
      categories.data && runOnJS(scrollToIndex)(index);
      activeCategoryIdSv.value = categories.data?.[index].id ?? '';
    },
    [categories.data],
  );

  return (
    <Box mr={-2} pt={22}>
      {categories.isLoading ? (
        <Categories.Loader />
      ) : (
        <FlatList
          ref={ref}
          showsHorizontalScrollIndicator={false}
          style={[styles.container, styles.nmh]}
          contentContainerStyle={styles.contentContainer}
          horizontal
          data={categories.data}
          renderItem={props => <CategoryTag {...props} activeCategoryIdx={activeCategoryIdx} />}
        />
      )}
      <ReText text={productCountText} style={styles.itemsLength} />
    </Box>
  );
}

Categories.Loader = () => (
  <ContentLoader
    width={400}
    height={24}
    fillOpacity={0.5}
    style={styles.container}
    backgroundColor={colors.primaryGradient[1]}
    foregroundColor={colors.primaryGradient[0]}>
    <Rect width={38} height={24} x={0} rx={13} ry={13} />
    <Rect width={67} height={24} x={48} rx={13} ry={13} />
    <Rect width={92} height={24} x={123} rx={13} ry={13} />
    <Rect width={49} height={24} x={223} rx={13} ry={13} />
    <Rect width={49} height={24} x={280} rx={13} ry={13} />
    <Rect width={108} height={24} x={337} rx={13} ry={13} />
  </ContentLoader>
);

const styles = StyleSheet.create({
  itemsLength: {
    ...textVariants.title2,
    color: colors.primary[700],
    marginBottom: 16,
  } as TextStyle,
  container: {
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  nmh: {
    marginHorizontal: -16,
  },
});
