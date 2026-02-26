import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import api from "./api";
import useAuthContext from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/Login";

const App = () => {
  // get current user
  const { state,dispatch } = useAuthContext();
  console.log("🚀 ~ state:", state)
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        if (response?.status === 200) {
          dispatch({ type: "SET_USER", payload: response.data });
        }
      } catch (error) {
        console.error("Failed to fetch current user:", error);
      }
    };
    if (userId) {
      fetchCurrentUser();
    }
  }, [userId, dispatch]);
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
