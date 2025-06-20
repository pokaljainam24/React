import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../futures/Todo/todoSlice';

export const Store = configureStore({
    reducer: {
        users: userReducer,
    }
});
