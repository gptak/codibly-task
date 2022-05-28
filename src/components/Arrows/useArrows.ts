import { useSelector, useDispatch } from "react-redux";
import { prevPage, nextPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";

export default function useArrows() {
  const page = useSelector((state: RootState) => state.page.value);
  const table = useSelector((state: RootState) => state.table.value);
  const dispatch = useDispatch();

  const lastPage = table?.length < 5;

  const handlePrev = () => {
    dispatch(prevPage());
  };
  const handleNext = () => {
    dispatch(nextPage());
  };

  return { page, handlePrev, handleNext, lastPage };
}
