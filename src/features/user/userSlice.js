import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserProfile } from "./userActions";

const initialState = {
  isLoading: false,
  userProfile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state) => {
        console.log("loading");
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

export default userSlice.reducer;
