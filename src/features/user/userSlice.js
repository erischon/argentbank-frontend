import { createSlice } from "@reduxjs/toolkit";

import {
  addAuthToLocalStorage,
  getAuthFromLocalStorage,
} from "../../utils/localStorage";

import { loginUser, getUserProfile, updateUser } from "./userActions";

const initialState = {
  isLoading: false,
  authToken: getAuthFromLocalStorage(),
  userProfile: null,
  errorLogin: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.authToken = null;
      state.userProfile = null;
      state.errorLogin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { token } = payload.body;

        state.isLoading = false;
        state.authToken = token;
        state.errorLogin = null;
        addAuthToLocalStorage(token);
      })
      .addCase(loginUser.rejected, (state, rejectedError) => {
        state.isLoading = false;
        state.errorLogin = rejectedError;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, { payload }) => {
        const { body } = payload;
        state.isLoading = false;
        state.userProfile = body;
      })
      .addCase(getUserProfile.rejected, (state, rejectedError) => {
        state.isLoading = false;
        console.log(
          `Get User Profile, Rejected Error Value : ${JSON.stringify(
            rejectedError.meta.rejectedWithValue
          )}`
        );
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { body } = payload;
        state.isLoading = false;
        state.userProfile = body;
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
