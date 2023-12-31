import { AuthContext } from "../_contexts/auth";
import { useContext } from "react";

export function useUserContext() {
  const userContext = useContext(AuthContext);
  return userContext;
}
