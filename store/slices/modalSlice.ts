import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ModalState {
    type: 'CONFIRM_ACTION' | 'ADD_BOOKMARK' | null;
    data: any;
}

const initialState: ModalState = { type: null, data: null }

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{ type: ModalState['type'], data?: any }>) => {
            state.type = action.payload.type;
            state.data = action.payload.data;
        },
        closeModal: (state) => {
            state.type = null;
            state.data = null;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;