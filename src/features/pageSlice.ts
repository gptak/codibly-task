import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageValue {
  value: { page: number; totalPage?: number };
}

const initialState: PageValue = { value: { page: 1 } };

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.value.page++;
    },
    prevPage: (state) => {
      state.value.page--;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.value.page = action.payload;
    },
    setTotalPage: (state, action: PayloadAction<number>) => {
      state.value.totalPage = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage, setTotalPage } = pageSlice.actions;

export default pageSlice.reducer;
