import { createSlice } from "@reduxjs/toolkit";

import {
  addAuthToLocalStorage,
  getAuthFromLocalStorage,
} from "../../utils/localStorage";

import { loginUser, getUserProfile } from "./userActions";

const initialState = {
  isLoading: false,
  authToken: getAuthFromLocalStorage(),
  userProfile: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.authToken = null;
      state.userProfile = null;
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
        addAuthToLocalStorage(token);
      })
      .addCase(loginUser.rejected, (state, rejectedError) => {
        state.isLoading = false;
        console.log(
          `Rejected Error Value : ${JSON.stringify(
            rejectedError.meta.rejectedWithValue
          )}`
        );
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
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
