import {createSlice} from '@reduxjs/toolkit';
const betsSlice = createSlice({
    name: 'profile',
    initialState: {
        bets: [],
    },
    reducers: {
        SET_BETS: (state, action) => {
            state.bets = action.payload
        }
}})

export const {SET_BETS} = betsSlice.actions;
export default betsSlice.reducer;