import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  const navigateToPage = (value: number) => {
    navigate(`?page=${value}`);
  };

  const navigateToId = (value: string) => {
    navigate(`?id=${value}`);
  };

  return { navigateToPage, navigateToId };
};
