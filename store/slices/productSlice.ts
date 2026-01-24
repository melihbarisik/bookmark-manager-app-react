import { bookmarks } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: bookmarks,
    sortBy: 'radded'
  },
  reducers: {
    toggleArchive: (state, action) => {
      const card = state.items.find(p => p.id === action.payload);
      if (card) {
        card.isArchived = !card.isArchived;
      }
    },
    togglePinned: (state, action) => {
      const card = state.items.find(p => p.id === action.payload);
      if (card) {
        card.pinned = !card.pinned;
      }
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    deleteById: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload)
    }
  },
});

export const { togglePinned, setSortBy, toggleArchive, deleteById } = productSlice.actions;
export default productSlice.reducer;