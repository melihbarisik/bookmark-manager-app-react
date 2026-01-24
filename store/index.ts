import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import tagFilterReducer from './slices/tagFilterSlice'
import modalReducer from './slices/modelSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    tagFilter: tagFilterReducer,
    modalSlice: modalReducer
   
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;