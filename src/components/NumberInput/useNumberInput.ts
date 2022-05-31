import { useSelector, useDispatch } from "react-redux";
import { changeFilter, FILTER_SELECTOR } from "../../features/index";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export default function useNumberInput() {
  const dispatch = useDispatch();
  const { navigateToId, navigateToPage } = useNavigateTo();

  const filter = useSelector(FILTER_SELECTOR);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilter(e.target.value));
  };

  const handleFilter = (): void => {
    if (filter) {
      navigateToId(filter);
    }
  };

  const handleReset = (): void => {
    navigateToPage(1);
    dispatch(changeFilter(""));
  };

  return {
    filter,
    handleInput,
    handleFilter,
    handleReset,
  };
}
