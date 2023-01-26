import { createAsyncThunk } from "@reduxjs/toolkit";

import customAxios from "../../utils/axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customAxios.post("/user/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (authToken, thunkAPI) => {
    try {
      const resp = await customAxios.post("/user/profile", "option", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      return resp?.data;
    } catch (error) {
      console.log("======error", error);

      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
