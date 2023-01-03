import axios from "../api/axios";

const LOGIN_URL = "/user/login";
const SIGNUP_URL = "/user/signup";

/**
 * Login user and get the JWT token
 * @param {payload}
 * @returns {}
 */
export const userLogin = async (payload) => {
  // payload = {
  //   email: "tony@stark.com",
  //   password: "password123",
  // };

  try {
    const response = await axios.post(LOGIN_URL, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
    });
    console.log("======userLogin", JSON.stringify(response?.data?.body?.token));
  } catch (err) {
    console.log("User Login Service Error :", err);
  }
};

/**
 * User Signup
 * @param {payload}
 * @returns {}
 */
export const userSignup = async (payload) => {
  // payload = {
  //   email: "toto@gmail.com",
  //   password: "password123",
  //   firstName: "toto",
  //   lastName: "litoto",
  // };

  try {
    const response = await axios.post(SIGNUP_URL, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
    });
    console.log("======userSignup", JSON.stringify(response?.data.status));
  } catch (err) {
    console.log("User Signup Service Error :", err);
  }
};
