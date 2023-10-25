import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './reducers/roomSlice';

export default configureStore({
    reducer: {
        room: roomReducer,
    }
})