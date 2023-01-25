import { createAsyncThunk } from "@reduxjs/toolkit";

import customAxios from "../../utils/axios";

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
