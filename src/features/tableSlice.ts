import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableValue {
  value: Color[];
}

interface Color {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const initialState: TableValue = { value: [] };

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changeTable: (state, action: PayloadAction<Color[]>) => {
      state.value = action.payload;
    },
  },
});

export const { changeTable } = tableSlice.actions;

export default tableSlice.reducer;
