import {Dimensions} from 'react-native';
import {QueryClient} from 'react-query';

export const queryClient = new QueryClient();
export const screenWidth = Dimensions.get('screen').width;
export const padding = 16;
