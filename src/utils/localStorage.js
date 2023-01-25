export const addAuthToLocalStorage = (user) => {
  localStorage.setItem("userToken", JSON.stringify(user));
};

export const removeAuthFromLocalStorage = () => {
  localStorage.removeItem("userToken");
};

export const getAuthFromLocalStorage = () => {
  const result = localStorage.getItem("userToken");
  const userToken = result ? JSON.parse(result) : null;
  return userToken;
};
