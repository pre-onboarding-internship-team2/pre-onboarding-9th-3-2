import { useLocation } from "react-router-dom";
import { getQueryData } from "../utils/getQueryData";

export function useTargetId() {
  const location = useLocation();
  const targetID = getQueryData(location.search);

  return targetID;
}
