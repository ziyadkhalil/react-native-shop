import AsyncStorage from '@react-native-async-storage/async-storage';
import {LikedProductState} from './store';

const key = 'likedProducts';

async function setLikedProductsCache({count, liked}: LikedProductState) {
  const likedIds = Object.keys(liked).filter(key => liked[key]);
  const cached = JSON.stringify({count, likedIds});
  await AsyncStorage.setItem(key, cached);
}

async function getLikedProductsCache(): Promise<LikedProductState | null> {
  const cache = await AsyncStorage.getItem(key);
  if (!cache) return null;
  const {likedIds, count} = JSON.parse(cache) as {count: number; likedIds: string[]};
  const liked = likedIds.reduce((prev, curr) => ({...prev, [curr]: true}), {});
  return {liked, count};
}

export default {
  setLikedProductsCache,
  getLikedProductsCache,
};
