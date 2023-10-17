import {createSlice} from '@reduxjs/toolkit';
const roomSlice = createSlice({
    name: 'room',
    initialState: {
        playerCount: 2
    },
    reducers: {
        SET_PLAYERCOUNT: (state, action) => {
            state.playerCount = action.payload
        }
}})

export const {SET_PLAYERCOUNT} = roomSlice.actions;
export default roomSlice.reducer;