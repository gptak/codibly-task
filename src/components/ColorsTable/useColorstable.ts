import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTable, setError } from "../../features/tableSlice";
import { setTotalPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";
import { baseURL } from "../../config/config";

export default function useColorTable() {
  const page = useSelector((state: RootState) => state.page.value.page);
  const table = useSelector((state: RootState) => state.table.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${baseURL}?page=${page}&per_page=5`)
      .then((response) => {
        dispatch(changeTable(response.data.data));
        dispatch(setTotalPage(response.data.total_pages));
      })
      .catch(() => dispatch(setError()));
  }, [dispatch, page]);

  return { table };
}
