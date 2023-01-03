import axios from "../api/axios";

const LOGIN_URL = "/user/login";
const SIGNUP_URL = "/user/signup";
const USER_PROFILE_URL = "/user/profile";

/**
 * User Login and Get the JWT Token
 * @param {{email: string, password: string}} payload
 * @returns {}
 */
export const userLogin = async (payload) => {
  payload = {
    email: "tony@stark.com",
    password: "password123",
  };

  try {
    const response = await axios.post(LOGIN_URL, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
    });
    console.log("======userLogin", JSON.stringify(response?.data?.body?.token));
    return response?.data?.body?.token;
  } catch (err) {
    console.log("User Login Service Error :", err);
  }
};

/**
 * User Signup
 * @param {string} token
 * @returns {}
 */
export const userSignup = async (payload) => {
  try {
    const response = await axios.post(SIGNUP_URL, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
    });
    console.log("======userSignup", JSON.stringify(response?.data.status));
  } catch (err) {
    console.log("User Signup Service Error :", err);
  }
};

/**
 * Get User Profile
 * @param {string} token
 * @returns {}
 */
export const getUserProfile = async (token) => {
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGVlZjMyNWM3M2JkNTIwODg5ZGU2MSIsImlhdCI6MTY3MjcyODUwMCwiZXhwIjoxNjcyODE0OTAwfQ.yYf8fhhVceChPiOG_z84TSpZMxJymoAGFbzJVklBbzs";
  const data = {
    key: "value",
  };

  try {
    const response = await axios.post(USER_PROFILE_URL, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("======userProfile", JSON.stringify(response?.data));
  } catch (err) {
    console.log("User Profile Service Error :", err);
  }
};

/**
 * Updating User Profile
 * @param {string} token
 * @param {{firstName: string, lastName: string}} payload
 * @returns {}
 */
export const updateUserProfile = async (token, payload) => {
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGVlZjMyNWM3M2JkNTIwODg5ZGU2MSIsImlhdCI6MTY3MjcyODUwMCwiZXhwIjoxNjcyODE0OTAwfQ.yYf8fhhVceChPiOG_z84TSpZMxJymoAGFbzJVklBbzs";
  payload = {
    firstName: "value 1",
    lastName: "value 2",
  };

  try {
    const response = await axios.put(USER_PROFILE_URL, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(
      "======updateUserProfile",
      JSON.stringify(response?.data.status)
    );
  } catch (err) {
    console.log("Update User Profile Service Error :", err);
  }
};
