import { useSelector } from "react-redux";
import { ERROR_MESSAGE_SELECTOR } from "../../features";

export default function useError() {
  const errorMessage: string | undefined = useSelector(ERROR_MESSAGE_SELECTOR);

  return { errorMessage };
}
