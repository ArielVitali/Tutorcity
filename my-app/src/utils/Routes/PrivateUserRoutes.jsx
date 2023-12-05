import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateUserRoutes = () => {
  const { session, loading } = useContext(UserContext);

  return loading ? (
    <div className="w-full h-full">
      <span className="loading loading-spinner text-neutral m-6 text-6xl text-center"></span>
    </div>
  ) : session ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
