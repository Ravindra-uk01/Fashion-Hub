import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    
}

const cartSlice = new createSlice({
    name : "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

// export const {} = cartSlice.actions;
export default cartSlice.reducer;