import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PublicRoute = () => {
  const { state } = useAuthContext();
  if (state.user?.id) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

export default PublicRoute;
