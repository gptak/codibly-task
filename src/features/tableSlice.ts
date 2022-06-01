import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TableValue = {
  value: Color[];
  error: boolean;
  errorMessage?: string;
};

export type Color = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

const initialState: TableValue = {
  value: [],
  error: false,
  errorMessage: undefined,
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    changeTable: (state: TableValue, action: PayloadAction<Color[]>): void => {
      state.value = action.payload;
      state.error = false;
    },
    setError: (
      state: TableValue,
      action: PayloadAction<string | undefined>
    ): void => {
      state.error = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { changeTable, setError } = tableSlice.actions;

export default tableSlice.reducer;
