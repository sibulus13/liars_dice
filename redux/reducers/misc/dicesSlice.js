import {createSlice} from '@reduxjs/toolkit';
const dicesSlice = createSlice({
    name: 'dices',
    initialState: {
        dices: [[]]
    },
    reducers: {
        SET_DICES: (state, action) => {
            state.dices = action.payload
        }
}})

export const {SET_DICES} = dicesSlice.actions;
export default dicesSlice.reducer;