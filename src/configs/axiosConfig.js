import Axios from "axios";
import sessionToken from "./../authServices/token";

export const axiosInstance = Axios.create({
  baseURL: "https://test-xdum.herokuapp.com",
});

axiosInstance.interceptors.request.use(function (config) {
  //request sent
  const _sessionToken = sessionToken.getToken();
  if (_sessionToken) config.headers.Authorization = "Bearer " + _sessionToken;
  return config;
});
