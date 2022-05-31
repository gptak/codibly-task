import { debounce } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../features/filterSlice";
import { RootState } from "../../app/store";
import { debounceTime } from "../../config/config";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export default function useNumberInput() {
  const dispatch = useDispatch();
  const { navigateToId, navigateToPage } = useNavigateTo();
  const filter = useSelector((state: RootState) => state.filter.value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  const handleFilter = debounce(() => {
    if (filter) {
      navigateToId(filter);
      return;
    }
    navigateToPage(1);
  }, debounceTime);

  return {
    filter,
    handleInput,
    handleFilter,
  };
}
