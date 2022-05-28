import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterValue {
  value: string;
}

const initialState: FilterValue = { value: "" };

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
