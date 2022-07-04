import { createSlice } from '@reduxjs/toolkit';
import { modalTypes } from './ModalController';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        open: true,
        type: modalTypes.login
    },
    reducers: {
        open: (state, action) => {
            state.type = action.payload
            state.open = true
        },
        close: state => {
            state.type = ''
            state.open = false
        }
    }
})

export const { open, close } = modalSlice.actions

export const modal = state => state.modal

export default modalSlice.reducer