import { useSelector, useDispatch } from "react-redux";
import { prevPage, nextPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";

export default function useArrows() {
  const page = useSelector((state: RootState) => state.page.value.page);
  const filter = useSelector((state: RootState) => state.filter.value);
  const error = useSelector((state: RootState) => state.table.error);

  const totalPage = useSelector(
    (state: RootState) => state.page.value.totalPage
  );
  const dispatch = useDispatch();

  const firstPage = !!(page <= 1);
  const lastPage = !!(page === totalPage);
  const isFiltering = !!(filter !== "");

  const handlePrev = () => {
    dispatch(prevPage());
  };

  const handleNext = () => {
    dispatch(nextPage());
  };

  return { firstPage, lastPage, isFiltering, error, handlePrev, handleNext };
}
