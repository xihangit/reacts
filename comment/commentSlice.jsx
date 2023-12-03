import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCommnent = createAsyncThunk(
  "commnets/getCommnent",
  async (dispatch,getComment) => {
    return await fetch("https://jsonplaceholder.typicode.com/comments ").then(
      (res) = res.sjon()
    );
  }
);

  const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    status: null,
  },

  extraReducers: {
    [getCommnent.pending]: (state, action) => {
      state.status = "loading";
    },

    [getCommnent.fulfilled]: (state, action) => {
      state.status = "success";
      state.status = action.payload;
    },

    [getCommnent.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default commentSlice.reducer;
