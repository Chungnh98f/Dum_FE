const tokenKey = "ACCESS_TOKEN";

const sessionToken = {};

sessionToken.getToken = () => {
  return window.sessionStorage.getItem(tokenKey);
};

sessionToken.setToken = (token) => {
  window.sessionStorage.setItem(tokenKey, token);
};

sessionToken.clearToken = () => {
  window.sessionStorage.removeItem(tokenKey);
};

export default sessionToken;
