import * as Font from 'expo-font';

export enum Fonts {
  sfBold = 'SFProDisplay-Bold',
  sfMedium = 'SFProDisplay-Medium',
  sfRegular = 'SFProDisplay-Regular',
}

export const loadFonts = () =>
  Font.loadAsync({
    [Fonts.sfBold]: require('@src/../assets/fonts/SFProDisplay-Bold.otf'),
    [Fonts.sfMedium]: require('@src/../assets/fonts/SFProDisplay-Medium.otf'),
    [Fonts.sfRegular]: require('@src/../assets/fonts/SFProDisplay-Regular.otf'),
  });
