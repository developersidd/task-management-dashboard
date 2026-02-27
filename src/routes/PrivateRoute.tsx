import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PrivateRoute = () => {
  const { state } = useAuthContext();
  if (!state.user?.id) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
