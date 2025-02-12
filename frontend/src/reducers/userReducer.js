import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0
}

const userSlice = new createSlice({
    name : "user",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {

    }
})

// export const {} = userSlice.actions;
export default userSlice.reducer;