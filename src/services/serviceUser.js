import axios from "../api/axios";

const LOGIN_URL = "/user/login";

const payload = {
  email: "tony@stark.com",
  password: "password123",
};

/**
 * Login user and get the JWT token
 * @param {payload}
 * @returns {}
 */
const userLogin = async (payload) => {
  try {
    const response = await axios.post(LOGIN_URL, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log(JSON.stringify(response?.data));
    const accessToken = response?.data?.accessToken;
  } catch (err) {}
};

export default userLogin;
