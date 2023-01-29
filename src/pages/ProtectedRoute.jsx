import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { userProfile } = useSelector((store) => store.user);

  if (!userProfile) {
    return (
      <div className="unauthorized-page">
        <h1>Unauthorized</h1>
        <Link to="/login">Login</Link> to gain access
        <Navigate to="/login" />
      </div>
    );
  }

  return <Outlet />;
};
export default ProtectedRoute;
