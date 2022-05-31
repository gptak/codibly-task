import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageValue {
  value: number | null;
}

const initialState: PageValue = { value: null };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setTotalPage: (
      state: PageValue,
      action: PayloadAction<number | null>
    ): void => {
      state.value = action.payload;
    },
  },
});

export const { setTotalPage } = pageSlice.actions;

export default pageSlice.reducer;
