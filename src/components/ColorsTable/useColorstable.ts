import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  changeTable,
  setError,
  setTotalPage,
  TABLE_SELECTOR,
  ERROR_SELECTOR,
} from "../../features/index";
import { baseURL, perPage } from "../../config/config";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { ITablePageResponse, ITableIdResponse } from "./ColorsTable.d";

export default function useColorsTable() {
  const table = useSelector(TABLE_SELECTOR);
  const error = useSelector(ERROR_SELECTOR);

  const dispatch = useDispatch();

  const { navigateToPage } = useNavigateTo();

  const [searchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");
  const paramsId = searchParams.get("id");

  useEffect(() => {
    if (paramsPage) {
      axios
        .get<ITablePageResponse>(`${baseURL}?page=${paramsPage}&${perPage}`)
        .then((response) => {
          dispatch(changeTable(response.data.data));
          dispatch(setTotalPage(response.data.total_pages));
        })
        .catch((error: AxiosError): void => {
          dispatch(setError());
          console.error(error.message);
        });
      return;
    }
    if (paramsId) {
      axios
        .get<ITableIdResponse>(`${baseURL}?id=${paramsId}`)
        .then((response): void => {
          //check in case id is not unique
          if (response.data.data.isArray) {
            dispatch(changeTable(response.data.data));
            return;
          }
          dispatch(changeTable([response.data.data]));
          dispatch(setTotalPage(null));
        })
        .catch((error: AxiosError) => {
          dispatch(setError());
          console.error(error.message);
        });
      return;
    }
    navigateToPage(1);
  }, [paramsPage, paramsId, dispatch, navigateToPage]);

  return { table, error };
}
