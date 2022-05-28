import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../features/tableSlice";
import pageReducer from "../features/pageSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: { table: tableReducer, page: pageReducer, filter: filterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
