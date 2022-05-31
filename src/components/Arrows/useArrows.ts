import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { ERROR_SELECTOR, TOTAL_PAGE_SELECTOR } from "../../features/index";

export default function useArrows() {
  const error = useSelector(ERROR_SELECTOR);
  const totalPage = useSelector(TOTAL_PAGE_SELECTOR);

  const [searchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page"));

  const { navigateToPage } = useNavigateTo();

  const prevDisable = !!(paramsPage === 1) || !totalPage || error;
  const nextDisable = !!(paramsPage === totalPage) || !totalPage || error;

  const handlePrev = (): void => {
    navigateToPage(paramsPage - 1);
  };

  const handleNext = (): void => {
    navigateToPage(paramsPage + 1);
  };

  return { prevDisable, nextDisable, handlePrev, handleNext };
}
