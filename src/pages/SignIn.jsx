import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser, getUserProfile } from "../features/user/userActions";

import FormRow from "../components/FormRow";

const initialState = {
  email: "",
  password: "",
  rememberMe: false,
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const { isLoading, authToken, userProfile } = useSelector(
    (store) => store.user
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      console.log("Please Fill Out All Fields");
      return;
    }

    dispatch(loginUser({ email: email, password: password }));
  };

  useEffect(() => {
    if (authToken) {
      dispatch(getUserProfile(authToken));
    }
  }, [authToken]);

  useEffect(() => {
    if (userProfile) {
      navigate(`/user/profile`);
    }
  }, [userProfile, navigate]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
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
              value={values.rememberMe}
              name="rememberMe"
              onChange={handleChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
