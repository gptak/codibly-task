import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterValue {
  value: string;
}

const initialState: FilterValue = { value: "" };

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
