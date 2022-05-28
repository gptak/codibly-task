import { useSelector, useDispatch } from "react-redux";
import { prevPage, nextPage } from "../../features/pageSlice";
import { RootState } from "../../app/store";

export default function useArrows() {
  const page = useSelector((state: RootState) => state.page.value.page);
  const filter = useSelector((state: RootState) => state.filter.value);

  const totalPage = useSelector(
    (state: RootState) => state.page.value.totalPage
  );
  const dispatch = useDispatch();

  const firstPage = page <= 1 && true;
  const lastPage = page === totalPage && true;
  const isFiltering = filter !== "" && true;

  const handlePrev = () => {
    dispatch(prevPage());
  };
  const handleNext = () => {
    dispatch(nextPage());
  };

  return { firstPage, lastPage, isFiltering, handlePrev, handleNext };
}
