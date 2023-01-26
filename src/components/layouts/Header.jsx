import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import argentBankLogo from "../../assets/img/argentBankLogo.png";

import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { userProfile } = useSelector((state) => state.auth);

  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {userProfile ? (
        <div className="user-container">
          <div>
            <i className="fa fa-user-circle"></i>
            {userProfile?.firstName}
          </div>
          <Link onClick={() => dispatch(logout())}>
            <i className="fa fa-sign-out"></i>
            Sign out
          </Link>
        </div>
      ) : (
        <div className="user-container">
          <Link to="signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
