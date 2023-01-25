import { createSlice } from "@reduxjs/toolkit";

import {
  addAuthToLocalStorage,
  getAuthFromLocalStorage,
} from "../../utils/localStorage";

import { loginUser } from "./authActions";

const initialState = {
  isLoading: false,
  authToken: getAuthFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
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
      });
  },
});

export default authSlice.reducer;
