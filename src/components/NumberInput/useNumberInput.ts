import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../features/filterSlice";
import { RootState } from "../../app/store";
import { changeTable } from "../../features/tableSlice";
import { debounce } from "lodash";

export default function useNumberInput() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.value);

  console.log(filter);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleFilter = debounce((e: React.KeyboardEvent) => {
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
      .then((response) => dispatch(changeTable(response.data.data)));
  }, 500);

  return {
    filter,
    handleInput,
    handleFilter,
  };
}
