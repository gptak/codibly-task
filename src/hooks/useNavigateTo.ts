import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  const navigateToPage = useCallback(
    (value: number) => {
      navigate(`?page=${value}`);
    },
    [navigate]
  );

  const navigateToId = useCallback(
    (value: string) => {
      navigate(`?id=${value}`);
    },
    [navigate]
  );

  return { navigateToPage, navigateToId };
};
