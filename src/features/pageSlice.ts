import { createSlice } from "@reduxjs/toolkit";

interface pageValue {
  value: number;
}

const initialState: pageValue = { value: 1 };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value++;
    },
    prevPage: (state) => {
      state.value--;
    },
  },
});

export const { nextPage, prevPage } = pageSlice.actions;

export default pageSlice.reducer;
