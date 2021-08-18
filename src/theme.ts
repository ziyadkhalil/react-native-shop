import {extendTheme, ITextProps} from 'native-base';
import {Fonts} from './fonts';

// lineheights causse warnings in native base, check https://github.com/styled-components/css-to-react-native/issues/40
export const lineHeights: Partial<Record<TextVariant, Record<'lineHeight', number>>> = {
  title1: {lineHeight: 31},
  title2: {lineHeight: 23},
  title3: {lineHeight: 22},
  title4: {lineHeight: 23},
  body: {lineHeight: 19},
  tabbar: {lineHeight: 13},
};

export const textVariants: Record<TextVariant, ITextProps> = {
  title1: {
    fontFamily: Fonts.sfBold,
    fontSize: 25,
    // lineHeight: 31,
    letterSpacing: 0.35,
  },
  title2: {
    fontFamily: Fonts.sfBold,
    fontSize: 19,
    color: 'white',
    // lineHeight: 23,
    letterSpacing: 0.35,
  },
  title3: {
    fontFamily: Fonts.sfBold,
    fontSize: 17,
    color: 'primary.700',
    // lineHeight: 22,
    letterSpacing: -0.41,
  },
  title4: {
    fontFamily: Fonts.sfRegular,
    fontSize: 19,
    color: 'primary.700',
    // lineHeight: 23,
    letterSpacing: -0.49,
  },
  body: {
    fontFamily: Fonts.sfRegular,
    fontSize: 14,
    // lineHeight: 19,
    color: 'primary.700',
    letterSpacing: -0.15,
  },
  tag: {
    fontFamily: Fonts.sfMedium,
    fontSize: 13,
    letterSpacing: -0.08,
    borderRadius: 13,
    px: 3,
    py: 1,
    overflow: 'hidden',
    color: 'darkGrey',
    bg: 'white',
  },
  tabbar: {
    fontSize: 10,
    // lineHeight: 13,
    color: 'grey',
    fontFamily: Fonts.sfBold,
  },
};

export const theme = extendTheme({
  colors: {
    primary: {900: '#40304D', 700: '#34283E', 400: '#845FA1', 200: '#e9d5ff'},
    background: '#F4F3F4',
    grey: '#9B9B9B',
    darkGrey: '#605A65',
    yellow: '#E7B944',
  },
  components: {
    Text: {
      variants: textVariants,
    },
    IconButton: {
      variants: {
        solid: {
          w: 9,
          h: 9,
          borderRadius: 18,
          shadow: 5,
          _pressed: {
            bgColor: 'primary.200',
          },
          bgColor: 'white',
        },
      },
    },
  },
});

const primaryGradient = [theme.colors.primary[700], theme.colors.primary[400]] as [string, string];
export const colors = {...theme.colors, primaryGradient};
