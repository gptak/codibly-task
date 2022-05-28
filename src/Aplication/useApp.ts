import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function useApp() {
  const error = useSelector((state: RootState) => state.table.error);
  return { error };
}
