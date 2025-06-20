import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('employees/fetchData', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    return res.json();  
});

const initialState = {
    isLoading: false,
    employees: [],
    isError: false,
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
            })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.employees = action.payload;
        });
        builder.addCase(fetchData.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default employeeSlice.reducer;
