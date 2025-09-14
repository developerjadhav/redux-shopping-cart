import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    value: 30,
  },
  reducers: {
    setProgress: (state, action) => {
      state.value = action.payload;
    },
    resetProgress: (state) => {
      state.value = 0;
    },
  },
});

export const { setProgress, resetProgress } = progressSlice.actions;
export default progressSlice.reducer;