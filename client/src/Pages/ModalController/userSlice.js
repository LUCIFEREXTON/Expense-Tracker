import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        uniqueName: undefined
    },
    reducers: {
        save: (state, action) => {
            console.log('reducer', action.payload);
            state.uniqueName = action.payload
        }
    }
})

export const { save } = userSlice.actions

export default userSlice.reducer

export const user = state => state.user.uniqueName