import {createSlice} from '@reduxjs/toolkit';
const roomSlice = createSlice({
    name: 'room',
    initialState: {
        playerCount: 2,
        playerName: '',
        roomID: '',
        playerNames: [],
        playerIndex: -1,
        dices: [[]],
        bets: [],

    },
    reducers: {
        SET_PLAYERCOUNT: (state, action) => {
            state.playerCount = action.payload
        },
        SET_PLAYERNAME: (state, action) => {
            state.playerName = action.payload
        },
        SET_ROOMID: (state, action) => {
            state.roomID = action.payload
        },
        SET_PLAYERINDEX: (state, action) => {
            state.playerIndex = action.payload
        },
        SET_PLAYERNAMES: (state, action) => {
            state.playerNames = action.payload
        },
        SET_DICES: (state, action) => {
            state.dices = action.payload
        },
        SET_BETS: (state, action) => {
            state.bets = action.payload
        }
}})

export const {SET_PLAYERCOUNT, SET_PLAYERNAME, SET_ROOMID, SET_PLAYERINDEX, SET_PLAYERNAMES, SET_DICES, SET_BETS} = roomSlice.actions;
export default roomSlice.reducer;