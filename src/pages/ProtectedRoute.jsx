import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userProfile } = useSelector((store) => store.user);

  if (!userProfile) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }

  return <Outlet />;
};
export default ProtectedRoute;
