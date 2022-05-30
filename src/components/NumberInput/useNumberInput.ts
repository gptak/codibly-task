import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../features/filterSlice";
import { RootState } from "../../app/store";
import { debounceTime } from "../../config/config";
import { useNavigate } from "react-router-dom";

export default function useNumberInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filter = useSelector((state: RootState) => state.filter.value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleFilter = debounce(() => {
    if (filter) {
      navigate(`?id=${filter}`);
      return;
    }
    navigate("?page=1");
  }, debounceTime);

  return {
    filter,
    handleInput,
    handleFilter,
  };
}
