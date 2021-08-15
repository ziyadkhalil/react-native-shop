import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Entry} from './src/navigation/entry';
import {colors, theme} from '@src/theme';
import {queryClient} from '@src/const';

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
  suppressColorAccessibilityWarning: true,
  theme,
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider config={nativeBaseConfig}>
        <SafeAreaProvider style={{backgroundColor: colors.background}}>
          <NavigationContainer>
            <Entry />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
