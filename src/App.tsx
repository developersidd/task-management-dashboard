import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import api from "./api";
import useAuthContext from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Loader from "./ui/Loader";

const App = () => {
  // get current user
  const { dispatch } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  //console.log("🚀 ~ state:", state);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchCurrentUser = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/users/${userId}`);
        if (response?.status === 200) {
          dispatch({ type: "SET_USER", payload: response.data });
        }
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (userId) {
      fetchCurrentUser();
    }
  }, [userId, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="" element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
      </Route>
      <Route path="" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
