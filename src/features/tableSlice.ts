import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TableValue {
  value: Color[];
  error: boolean;
}

interface Color {
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
    changeTable: (state, action: PayloadAction<Color[]>) => {
      state.value = action.payload;
      state.error = false;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { changeTable, setError } = tableSlice.actions;

export default tableSlice.reducer;
