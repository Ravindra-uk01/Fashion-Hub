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
  
  export const addUser = createAsyncThunk("user/addUser", async (data) => {
    try {
      const response = await newRequest.post(`/auth/signup`, data); 
  
      const { status, message } = response.data;
      if (status === "success") {
        toast.success(message, { ...toastData });
      } else {
        toast.warn(message, { ...toastData });
      }
      return response.data;
    } catch (error) {
      const { status, message } = error.response.data;
  
      if (status === "warning") {
        toast.warn(message, {
          ...toastData,
        });
      } else {
        toast.error(message, {
            ...toastData
        })
      }
    }
  });
  
  export const removeUser = createAsyncThunk("user/removeUser", async () => {
    try {
      const response = await newRequest.post(`/auth/logout`, {});
  
      const { status, message } = response.data;
      if (status === "success") {
        toast.success(message, { ...toastData });
        // navigate('/home');
      } else {
        toast.warn(message, { ...toastData });
      }
      return response.data;
    } catch (error) {
      const { status, message } = error.response.data;
  
      if (status === "warning") {
        toast.warn(message, {
          ...toastData,
        });
      } else {
        toast.error(message, {
            ...toastData
        })
      }
    }
  });
  
  export const getProfile = createAsyncThunk(
    "user/getProfile",
    async() => {
      try {
        const response = await newRequest.get('auth/getProfile') 
        return response.data;
      } catch (error) {
        console.log('System Internal Error', error)
      }
    }
  ) 
  

const initialState = {
    loggedIn: false,
    user: {},
}

const userSlice = new createSlice({
    name : "user",
    initialState,
    reducers: {
        setProfile: (state, action)=>{
            const {user} = action.payload;
            state.user = user;
            state.loggedIn = true;
          },
    },
    extraReducers: (builder) => {
        builder.addCase(addUser.fulfilled , (state, action) => {
            const {status, user} = action.payload;
            if(status === "success"){
                state.user = user;
                state.loggedIn = true;
            }
        })
        builder.addCase(removeUser.fulfilled , (state, action) => {
            const {status} = action.payload;
            if(status === "success"){
                state.user = {};
                state.loggedIn = false;
            }
        })
        builder.addCase(getProfile.fulfilled, (state, action) => {
            const {status, user} = action.payload;
            if(status == "success"){
              state.user = user;
              state.loggedIn = true;
            }
        })
    }
})

// export const {} = userSlice.actions;
export default userSlice.reducer;