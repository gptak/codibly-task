import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterValue {
  value: string;
}

const initialState: FilterValue = { value: "" };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state: FilterValue, action: PayloadAction<string>): void => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
