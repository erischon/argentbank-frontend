import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser, getUserProfile } from "../features/user/userActions";
import { isRemember } from "../features/user/userSlice";

import FormRow from "../components/FormRow";

const initialState = {
  email: "",
  password: "",
  // rememberMe: true,
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [values, setValues] = useState(initialState);
  // const [rememberMe, setRememberMe] = useState(false);
  const { isLoading, authToken, userProfile, errorLogin, rememberUser } =
    useSelector((store) => store.user);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log("======", name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      setErrMsg("Please Fill Out All Fields");

      errRef.current?.focus();

      return;
    }

    dispatch(loginUser({ email: email, password: password }));
  };

  useEffect(() => {
    if (authToken) {
      dispatch(isRemember(rememberUser));
      dispatch(getUserProfile(authToken));
    }
  }, [authToken]);

  useEffect(() => {
    if (userProfile) {
      navigate(`/user/profile`);
    }
  }, [userProfile, navigate]);

  useEffect(() => {
    if (errorLogin) {
      setErrMsg(errorLogin?.payload?.message);
    }
  }, [errorLogin]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <p ref={errRef} className="error-msg" aria-live="assertive">
          {errMsg}
        </p>

        <i className="fa fa-user-circle sign-in-icon"></i>

        <h1>Sign In</h1>

        <form onSubmit={onSubmit}>
          <FormRow
            type="text"
            name="email"
            value={values.email}
            handleChange={handleChange}
            required={true}
            autoComplete="off"
          />

          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
            required={true}
          />

          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              value={values.rememberUser}
              name="rememberUser"
              onChange={handleChange}
              defaultChecked={values.rememberUser}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button" disabled={isLoading}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
