import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const useAuth = () => {
  const authResult = useContext(AuthContext);
  return authResult
};

export default useAuth;