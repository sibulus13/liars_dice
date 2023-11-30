import {createSlice} from '@reduxjs/toolkit';
const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        name: 'none',
        names: [],
    },
    reducers: {
        SET_NAME: (state, action) => {
            state.name = action.payload
        },
        SET_NAMES: (state, action) => {
            state.names = action.payload
        }
}})

export const {SET_NAME, SET_NAMES} = profileSlice.actions;
export default profileSlice.reducer;