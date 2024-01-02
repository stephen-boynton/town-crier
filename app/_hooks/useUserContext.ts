import { UserContext } from "../_contexts/user";
import { useContext } from "react";

export function useUserContext() {
  const userContext = useContext(UserContext);
  return userContext;
}
