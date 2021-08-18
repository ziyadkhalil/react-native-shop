import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from 'react-query';
import {Entry} from './src/navigation/entry';
import {colors, theme} from '@src/theme';
import {queryClient} from '@src/const';
import {store} from '@src/store';

const nativeBaseConfig = {
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient,
  },
  suppressColorAccessibilityWarning: true,
  theme,
};

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NativeBaseProvider config={nativeBaseConfig}>
          <SafeAreaProvider style={{backgroundColor: colors.background}}>
            <NavigationContainer>
              <Entry />
            </NavigationContainer>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </QueryClientProvider>
    </Provider>
  );
}
