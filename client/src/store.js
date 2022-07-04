import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Pages/ModalController/userSlice'
import modalReducer from './Pages/ModalController/modalSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        modal: modalReducer
    }
})