import { Bookmark, bookmarks } from '@/data';
import { createSlice } from '@reduxjs/toolkit';


interface ProductState {
  items: Bookmark[];
  sortBy: string; 
  searchQuery: string; 
}

const initialState: ProductState = {
  items: bookmarks,
  sortBy: 'radded',
  searchQuery: "",
};


const productSlice = createSlice({
  name: 'products',
  initialState,
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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    deleteById: (state, action) => {
      state.items = state.items.filter((p) => p.id !== action.payload)
    }
  },
});

export const { togglePinned, setSortBy, setSearchQuery, toggleArchive, deleteById } = productSlice.actions;
export default productSlice.reducer;