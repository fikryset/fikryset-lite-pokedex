import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 20,
  },
  reducers: {
    increment: (state) => {
      state.value += 20;
    },
  },
});

export const { increment, decrement, clearAmount } = counterSlice.actions;

export default counterSlice.reducer;
