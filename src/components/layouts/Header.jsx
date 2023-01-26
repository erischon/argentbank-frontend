import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import argentBankLogo from "../../assets/img/argentBankLogo.png";

import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { userToken } = useSelector((state) => state.auth);

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

      <div>
        <Link to="signin" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
        <button className="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
