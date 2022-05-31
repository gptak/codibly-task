import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export default function useArrows() {
  const error = useSelector((state: RootState) => state.table.error);
  const page = useSelector((state: RootState) => state.page.value.page);
  const totalPage = useSelector(
    (state: RootState) => state.page.value.totalPage
  );

  const { navigateToPage } = useNavigateTo();

  const firstPage = !!(page === 1) || !totalPage || error;
  const lastPage = !!(page === totalPage) || !totalPage || error;

  const handlePrev = () => {
    navigateToPage(page - 1);
  };

  const handleNext = () => {
    navigateToPage(page + 1);
  };

  return { firstPage, lastPage, handlePrev, handleNext };
}
