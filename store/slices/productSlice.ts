import { bookmarks } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: bookmarks,
    sortBy: 'radded'
  },
  reducers: {
    togglePinned: (state, action) => {
      const product = state.items.find(p => p.id === action.payload);
      if (product) {
        product.pinned = !product.pinned;
      }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { togglePinned, setSortBy } = productSlice.actions;
export default productSlice.reducer;