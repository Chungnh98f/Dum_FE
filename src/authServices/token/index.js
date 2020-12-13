const tokenKey = "ACCESS_TOKEN";

const sessionToken = {};

sessionToken.getToken = () => {
  return JSON.parse(window.sessionStorage.getItem(tokenKey));
};

sessionToken.setToken = (token) => {
  window.sessionStorage.setItem(tokenKey, JSON.stringify(token));
};

sessionToken.clearToken = () => {
  window.sessionStorage.removeItem(tokenKey);
};

export default sessionToken;
