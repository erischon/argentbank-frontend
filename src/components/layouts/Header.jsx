import { Link } from "react-router-dom";

import argentBankLogo from "../../assets/img/argentBankLogo.png";

const Header = () => {
  return (
    <nav class="main-nav">
      <Link to="/">
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="signin">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Header;
