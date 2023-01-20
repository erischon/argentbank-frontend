import { useRef, useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";

import AuthContext from "../context/AuthProvider";

import { useNavigate } from "react-router-dom";
import { userLogin } from "../features/auth/authAction";

const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await userLogin({ email: user, password: pwd });
    console.log("======response", response);

    if (response?.status != 200) {
      setErrMsg(response?.message);

      errRef.current?.focus();

      return;
    }

    const accessToken = response?.body?.token;

    setAuth({ user, pwd, accessToken });
    setUser("");
    setPwd("");
    setSuccess(true);
    navigate(`../user/123`);
  };

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <main className="main bg-dark">
      {success ? (
        <section>
          <h1>You are logged in !</h1>
        </section>
      ) : (
        <section className="sign-in-content">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {" "}
            {errMsg}
          </p>

          <i className="fa fa-user-circle sign-in-icon"></i>

          <h1>Sign In</h1>

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      )}
    </main>
  );
};

export default SignIn;
