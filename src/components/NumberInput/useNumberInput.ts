import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../features/filterSlice";
import { RootState } from "../../app/store";

export default function useNumberInput() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.value);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilter(e.target.value));
  };

  return { filter, handleInput };
}
