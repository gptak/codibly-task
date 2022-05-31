import { RootState } from "../app/store";
import { changeFilter } from "./filterSlice";
import { setTotalPage } from "./pageSlice";
import { setError, changeTable, Color } from "./tableSlice";

const FILTER_SELECTOR = (state: RootState): string => state.filter.value;
const TOTAL_PAGE_SELECTOR = (state: RootState): number | null =>
  state.page.value;
const TABLE_SELECTOR = (state: RootState): Color[] => state.table.value;
const ERROR_SELECTOR = (state: RootState): boolean => state.table.error;

export {
  setError,
  changeTable,
  setTotalPage,
  changeFilter,
  FILTER_SELECTOR,
  TOTAL_PAGE_SELECTOR,
  TABLE_SELECTOR,
  ERROR_SELECTOR,
};
