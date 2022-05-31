import { Color } from "./tableSlice";

export interface ITablePageResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
  support: {
    url: string;
    text: string;
  };
}
