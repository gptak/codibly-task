import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useNavigateTo } from "../../hooks/useNavigateTo";
import { ERROR_SELECTOR, TOTAL_PAGE_SELECTOR } from "../../features/index";

export default function useArrows() {
  const error: boolean = useSelector(ERROR_SELECTOR);
  const totalPage: number | null = useSelector(TOTAL_PAGE_SELECTOR);

  const [searchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get("page"));

  const { navigateToPage } = useNavigateTo();

  const prevDisable: boolean = useMemo(
    () => !!(paramsPage === 1) || !totalPage || error,
    [paramsPage, totalPage, error]
  );

  const nextDisable: boolean = useMemo(
    () => !!(paramsPage === totalPage) || !totalPage || error,
    [paramsPage, totalPage, error]
  );

  const handlePrev = useCallback(() => {
    navigateToPage(paramsPage - 1);
  }, [paramsPage, navigateToPage]);

  const handleNext = useCallback(() => {
    navigateToPage(paramsPage + 1);
  }, [paramsPage, navigateToPage]);

  return { prevDisable, nextDisable, handlePrev, handleNext };
}
