import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userProfile } = useSelector((store) => store.auth);

  if (!userProfile) {
    return (
      <div id="error-page">
        <h1>Unauthorized</h1>
        <p>Sorry, it's an unauthorized place.</p>
      </div>
    );
  }

  return <Outlet />;
};
export default ProtectedRoute;
