import { bookmarks } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: bookmarks
  },
  reducers: {
    togglePinned: (state, action) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product) {
        product.pinned = !product.pinned;
      }
      state.items.sort((a, b) => {
        return Number(b.pinned) - Number(a.pinned);
      });
    },
  },
});

export const { togglePinned } = productSlice.actions;
export default productSlice.reducer;