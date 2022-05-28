import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTable } from "../../features/tableSlice";
import { setTotalPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";

export default function useColorTable() {
  const page = useSelector((state: RootState) => state.page.value.page);
  const table = useSelector((state: RootState) => state.table.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/products?page=${page}&per_page=5`)
      .then((response) => {
        dispatch(changeTable(response.data.data));
        dispatch(setTotalPage(response.data.total_pages));
      });
  }, [dispatch, page]);

  return { table };
}
