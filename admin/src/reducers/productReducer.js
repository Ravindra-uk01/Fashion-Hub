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
    product: {},
    error: null
}

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        try {
            const response = await newRequest.get("/products");
            return response.data;
            
        } catch (error) {
            toast.error("Failed to fetch products", toastData);
            return error;
        }
    }
  );

export const getProductById = createAsyncThunk(
    "product/getProductById",
    async (id) => {
        try {
            const response = await newRequest.get(`/products/id/${id}`);
            return response.data;
        } catch (error) {
            toast.error("Failed to fetch product", toastData);
            return error;
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "product/deleteProduct",
    async (id) => {
        try {
            const response = await newRequest.delete(`/products/id/${id}`);
            return response.data;
        } catch (error) {
            toast.error("Failed to delete product", toastData);
            return error;
        }
    }
);

const productSlice = new createSlice({
    name : "product",
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            const {products} = action.payload;
            state.loading = false;
            state.products = products;
        }); 
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(deleteProduct.pending, (state) => {
            state.loading = true;
        }); 
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const {product} = action.payload;
            state.loading = false;
            state.products = state.products.filter((item) => item._id !== product._id);
        });
        builder.addCase(deleteProduct.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(getProductById.pending, (state) => {    
            state.loading = true;
        });
        builder.addCase(getProductById.fulfilled, (state, action) => {
            const {product} = action.payload;
            state.loading = false;
            state.product = product;
        });
        builder.addCase(getProductById.rejected, (state) => {
            state.loading = false;
        });
    }
})

// export const {} = productSlice.actions;
export default productSlice.reducer;