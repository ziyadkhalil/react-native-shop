import React from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {Box, Center, IButtonProps, IconButton} from 'native-base';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {ArrowBackIcon} from '@src/assets';
import {colors} from '@src/theme';

import {Text} from './Text';

const headerHeight = 24 + 28;

const headerBg = {
  linearGradient: {
    start: [0, 0.5],
    end: [1, 0.5],
    colors: colors.primaryGradient,
  },
};

export const Header = ({
  navigation,
  options,
  route,
  back,
}: NativeStackHeaderProps | (BottomTabHeaderProps & {back?: undefined})) => {
  return (
    <Box bg={headerBg} safeAreaTop>
      <Center height={headerHeight} pb="7" px="3">
        {back && <BackButton onPress={navigation.goBack} />}
        <Text variant="title2">{options.title ?? route.name}</Text>
      </Center>
    </Box>
  );
};

const BackButton = ({onPress}: Pick<IButtonProps, 'onPress'>) => (
  <IconButton
    borderRadius={20}
    position="absolute"
    left={4}
    top={-2}
    colorScheme="primary"
    onPress={onPress}
    icon={<ArrowBackIcon />}
  />
);
