import { useContext } from "react";
import navigationContext from "../context/navigation";

function useNavigation() {
  return useContext(navigationContext);
}

export default useNavigation;
