import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateUserRoutes = () => {
  const { session, loading } = useContext(UserContext);

  return loading ? (
    <div className="bg-green-900">Loading...</div>
  ) : session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
