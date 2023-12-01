import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateUserRoutes = () => {
  const { session, loading } = useContext(UserContext);

  loading ? (
    <div>Loading...</div>
  ) : session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
