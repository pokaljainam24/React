import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from '../futures/employee/employeeSlice';

export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    },
});
