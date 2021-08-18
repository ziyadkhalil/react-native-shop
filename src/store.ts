import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import cache from './cache';

export type LikedProductState = {
  count: number;
  liked: Record<string, boolean>;
};

const initialState: LikedProductState = {
  count: 0,
  liked: {},
};

export const likedProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<string>) => {
      state.liked[action.payload] = true;
      state.count++;
    },
    unlike: (state, action: PayloadAction<string>) => {
      const {[action.payload]: unliked, ...rest} = state.liked;
      state.liked = rest;
      state.count--;
    },
    set: (_, action: PayloadAction<LikedProductState>) => action.payload,
    reset: () => initialState,
  },
});

export const store = configureStore({
  reducer: {
    products: likedProductSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export function useMutateProduct() {
  const dispatch = useDispatch<AppDispatch>();
  const like = (id: string) => {
    dispatch(likedProductSlice.actions.like(id));
    cache.setLikedProductsCache(store.getState().products);
  };
  const unlike = (id: string) => {
    dispatch(likedProductSlice.actions.unlike(id));
    cache.setLikedProductsCache(store.getState().products);
  };
  return {like, unlike};
}
