import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileSlice';
import roomReducer from './reducers/roomSlice';

export default configureStore({
    reducer: {
        profile: profileReducer,
        room: roomReducer
    }
})