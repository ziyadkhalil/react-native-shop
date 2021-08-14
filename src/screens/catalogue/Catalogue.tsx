import {NavigationProp} from '@react-navigation/native';
import {Box, FlatList, Text} from 'native-base';
import React from 'react';
import {ViewStyle} from 'react-native';
import {Categories, ProductCard} from './components';

type Props = {
  navigation: NavigationProp<CatalougeStackParamList, 'Catalogue'>;
};
const data = new Array(5).fill(0);

export function Catalogue({navigation}: Props) {
  return (
    <FlatList
      numColumns={2}
      ListHeaderComponent={Categories}
      keyExtractor={(_, index) => `${index}`}
      renderItem={({item, index}) => (
        <CardContainer withMarginRight={!(index % 2)}>
          <ProductCard />
        </CardContainer>
      )}
      contentContainerStyle={containerStyle}
      columnWrapperStyle={{marginBottom: 24}}
      data={data}
    />
  );
}

const CardContainer: React.FC<{withMarginRight: boolean}> = ({children, withMarginRight}) => (
  <Box flex={0.5} mr={withMarginRight ? 4 : 0}>
    {children}
  </Box>
);

const containerStyle: ViewStyle = {
  paddingHorizontal: 16,
  paddingVertical: 22,
};
