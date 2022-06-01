import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import { changeFilter, FILTER_SELECTOR } from "../../features/index";
import { useNavigateTo } from "../../hooks/useNavigateTo";

export default function useNumberInput() {
  const dispatch: AppDispatch = useDispatch();

  const filter: string = useSelector(FILTER_SELECTOR);

  const { navigateToId, navigateToPage } = useNavigateTo();

  const [searchParams] = useSearchParams();
  const paramsId = searchParams.get("id");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilter(e.target.value));
  };

  const handleFilter = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (filter) {
      navigateToId(filter);
    }
  };

  const handleReset = (): void => {
    navigateToPage(1);
    dispatch(changeFilter(""));
  };

  const submitDisable = useMemo(() => !filter, [filter]);
  
  const resetDisable = useMemo(() => !paramsId, [paramsId]);

  return {
    filter,
    submitDisable,
    resetDisable,
    handleInput,
    handleFilter,
    handleReset,
  };
}
