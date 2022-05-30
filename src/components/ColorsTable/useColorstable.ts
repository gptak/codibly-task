import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTable, setError } from "../../features/tableSlice";
import { setPage, setTotalPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";
import { baseURL } from "../../config/config";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function useColorTable() {
  const table = useSelector((state: RootState) => state.table.value);
  const error = useSelector((state: RootState) => state.table.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const paramsPage = searchParams.get("page");
  const paramsId = searchParams.get("id");

  useEffect(() => {
    if (paramsPage) {
      axios
        .get(`${baseURL}?page=${paramsPage}&per_page=5`)
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
    navigate(`?page=1`);
  }, [dispatch, navigate, paramsPage, paramsId]);

  return { table, error };
}
