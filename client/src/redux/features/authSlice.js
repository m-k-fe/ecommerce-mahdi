import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post("http://localhost:5000/api/register", {
        username: user.username,
        email: user.email,
        phone: user.phone,
        password: user.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post("http://localhost:5000/api/login", user);
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    username: "",
    email: "",
    phone: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
  },
  reducers: {
    loadUser: (state) => {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        state.token = token;
        state.username = user.username;
        state._id = user._id;
        state.phone = user.phone;
        state.userLoaded = true;
      }
    },
    logOutUser: (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.username = "";
      state.email = "";
      state.phone = "";
      state._id = "";
      state.registerStatus = "";
      state.registerError = "";
      state.loginStatus = "";
      state.loginError = "";
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.registerStatus = "Pending";
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const user = jwtDecode(payload);
      state.token = payload;
      state.username = user.username;
      state.email = user.email;
      state.phone = user.phone;
      state._id = user._id;
      state.registerStatus = "Success";
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.registerStatus = "Rejected";
      state.registerError = payload;
    },
    [loginUser.pending]: (state) => {
      state.loginStatus = "Pending";
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const user = jwtDecode(payload);
      state.token = payload;
      state.username = user.username;
      state._id = user._id;
      state.loginStatus = "Success";
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loginStatus = "Rejected";
      state.loginError = payload;
    },
  },
});

export const { loadUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
