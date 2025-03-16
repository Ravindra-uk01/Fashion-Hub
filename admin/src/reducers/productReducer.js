import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import newRequest from "../utils/newRequest";

const toastData = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };


const initialState = {
    loading: false,
    products: [],
}

const productSlice = new createSlice({
    name : "product",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
       
    }
})

// export const {} = productSlice.actions;
export default productSlice.reducer;