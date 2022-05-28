import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pageValue {
  value: string;
}

const initialState: pageValue = { value: "" };

export const pageSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = pageSlice.actions;

export default pageSlice.reducer;
