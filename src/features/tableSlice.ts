import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableValue {
  value: Color[];
  error: boolean;
}

export interface Color {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const initialState: TableValue = { value: [], error: false };

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changeTable: (state: TableValue, action: PayloadAction<Color[]>): void => {
      state.value = action.payload;
      state.error = false;
    },
    setError: (state: TableValue): void => {
      state.error = true;
    },
  },
});

export const { changeTable, setError } = tableSlice.actions;

export default tableSlice.reducer;
