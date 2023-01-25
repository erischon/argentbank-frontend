import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import customAxios from "../../utils/axios";
import {
  addAuthToLocalStorage,
  removeAuthFromLocalStorage,
  getAuthFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  authToken: getAuthFromLocalStorage(),
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customAxios.post("/user/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

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
