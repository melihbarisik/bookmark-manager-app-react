import { createSlice } from "@reduxjs/toolkit";

interface Sidebar {
    isSidebarOpen: boolean;
}

const initialState: Sidebar = {
    isSidebarOpen: true
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
        openSidebar: (state) => {
            state.isSidebarOpen = true;
        }
    }
})

export const { toggleSidebar, closeSidebar, openSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;