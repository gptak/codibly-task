import axios from "axios";
import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../features/filterSlice";
import { setPage } from "../../features/pageSlice";
import { changeTable } from "../../features/tableSlice";
import { RootState } from "../../app/store";

export default function useNumberInput() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleFilter = debounce(() => {
    if (filter) {
      axios
        .get(`https://reqres.in/api/products?id=${filter}`)
        .then((response) => {
          //check in case id is not unique
          if (response.data.data.isArray) {
            dispatch(changeTable(response.data.data));
            return;
          }
          dispatch(changeTable([response.data.data]));
        });
      return;
    }
    axios
      .get(`https://reqres.in/api/products?page=1&per_page=5`)
      .then((response) => {
        dispatch(changeTable(response.data.data));
        dispatch(setPage(1));
      });
  }, 500);

  return {
    filter,
    handleInput,
    handleFilter,
  };
}
