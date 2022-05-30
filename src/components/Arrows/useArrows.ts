import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";

export default function useArrows() {
  const error = useSelector((state: RootState) => state.table.error);
  const page = useSelector((state: RootState) => state.page.value.page);
  const totalPage = useSelector(
    (state: RootState) => state.page.value.totalPage
  );

  const navigate = useNavigate();

  const firstPage = !!(page === 1);
  const lastPage = !!(page === totalPage);

  const handlePrev = () => {
    navigate(`?page=${page - 1}`);
  };

  const handleNext = () => {
    navigate(`?page=${page + 1}`);
  };

  return { firstPage, lastPage, totalPage, error, handlePrev, handleNext };
}
