import { useState, useEffect } from "react";
import FormRow from "../components/FormRow";

const initialState = {
  email: "",
  password: "",
  isMember: true,
  rememberMe: false,
};

const SignIn = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log("======handleChange", e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("======onSubmit", e.target);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>

        <h1>Sign In</h1>

        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              required
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
