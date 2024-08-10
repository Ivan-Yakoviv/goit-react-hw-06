import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "",
};
      
const slice = createSlice({
    name: 'filters',
    initialState,
    reducers: {},
});

export const filtersReducer = slice.reducer;