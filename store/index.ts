import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import tagFilterReducer from './slices/tagFilterSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    tagFilter: tagFilterReducer,
   
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;