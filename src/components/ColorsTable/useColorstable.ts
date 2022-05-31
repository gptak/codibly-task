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

export default function useColorsTable() {
  const table = useSelector(TABLE_SELECTOR);
  const error = useSelector(ERROR_SELECTOR);

  const dispatch = useDispatch();

  const { navigateToPage } = useNavigateTo();

  const [searchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");
  const paramsId = searchParams.get("id");

  useEffect(() => {
    console.log("test");
    if (paramsPage) {
      axios
        .get(`${baseURL}?page=${paramsPage}&per_page=${perPage}`)
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
        .get(`${baseURL}?id=${paramsId}`)
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
  }, [dispatch, navigateToPage, paramsPage, paramsId]);

  return { table, error };
}
