import React, {useEffect, useRef} from 'react';

import {FlatList, StyleSheet, TextStyle} from 'react-native';
import {useAnimatedReaction, useDerivedValue, useSharedValue, withTiming, runOnJS} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

import {textVariants, theme} from '@src/theme';
import {CategoryTag} from './CategoryTag';

const x = ['All', 'Dresses', 'Tops', 'Jeans', "Men's Clothes", 'Kids'];
const categories = [...x, ...x];

export function Categories() {
  const activeCategoryIdx = useSharedValue(0);
  const itemsLength = useSharedValue(0);
  const text = useDerivedValue(() => `${itemsLength.value.toFixed(0)} items`, []);
  useEffect(() => {
    itemsLength.value = withTiming(5000);
  }, []);

  const ref = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => ref?.current?.scrollToIndex({index, viewOffset: 22});

  useAnimatedReaction(
    () => activeCategoryIdx.value,
    index => runOnJS(scrollToIndex)(index),
  );

  return (
    <>
      <FlatList
        ref={ref}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        horizontal
        data={categories}
        renderItem={props => <CategoryTag {...props} activeCategoryIdx={activeCategoryIdx} />}
      />
      <ReText text={text} style={styles.itemsLength} />
    </>
  );
}

const styles = StyleSheet.create({
  itemsLength: {
    ...textVariants.title2,
    color: theme.colors.primary[700],
    marginBottom: 16,
  } as TextStyle,
  container: {
    marginHorizontal: -22,
    marginBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 22,
  },
});
