import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTable, setError } from "../../features/tableSlice";
import { setPage, setTotalPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";
import { baseURL, perPage } from "../../config/config";
import { useSearchParams } from "react-router-dom";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export default function useColorsTable() {
  const table = useSelector((state: RootState) => state.table.value);
  const error = useSelector((state: RootState) => state.table.error);

  const dispatch = useDispatch();
  const { navigateToPage } = useNavigateTo();

  const [searchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");
  const paramsId = searchParams.get("id");

  useEffect(() => {
    if (paramsPage) {
      axios
        .get(`${baseURL}?page=${paramsPage}&per_page=${perPage}`)
        .then((response) => {
          dispatch(changeTable(response.data.data));
          dispatch(setPage(response.data.page));
          dispatch(setTotalPage(response.data.total_pages));
        })
        .catch((error) => {
          dispatch(setError());
          console.error(error.message);
        });
      return;
    }
    if (paramsId) {
      axios
        .get(`${baseURL}?id=${paramsId}`)
        .then((response) => {
          //check in case id is not unique
          if (response.data.data.isArray) {
            dispatch(changeTable(response.data.data));
            return;
          }
          dispatch(changeTable([response.data.data]));
          dispatch(setTotalPage(null));
        })
        .catch((error) => {
          dispatch(setError());
          console.error(error.message);
        });
      return;
    }
    navigateToPage(1);
  }, [dispatch, navigateToPage, paramsPage, paramsId]);

  return { table, error };
}
