import { Color } from "./tableSlice";

export type TTablePageResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Color[];
  support: Support;
};

export type TTableIdResponse = {
  data: Color;
  support: Support;
};

type Support = { url: string; text: string };
