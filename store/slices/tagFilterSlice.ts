import { sideBarData } from "@/mocks/sidebarCheckboxes";
import { createSlice } from "@reduxjs/toolkit";


const tagFilterSlice = createSlice({
    name: "tagFilter",
    initialState: {
        items: sideBarData
    },
    reducers: {
        tagFilterChange: (state, action) => {
            state.items = state.items.map(item =>
                item.label === action.payload
                    ? { ...item, checked: !item.checked }
                    : item
            );
        }
    }
})

export const { tagFilterChange } = tagFilterSlice.actions;
export default tagFilterSlice.reducer;