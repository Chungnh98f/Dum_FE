import { axiosInstance } from "./../../configs/axiosConfig";

export const getLoginEffect = async (payload) => {
  const { email, password } = payload;
  let res = {};
  try {
    res = await axiosInstance.post("/auth/sign-in", { email, password });
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const getLogoutEffect = async () => {
  let res = {};
  try {
    res = await axiosInstance.get("/auth/sign-out");
  } catch (error) {
    res = error.response;
  }
  return res;
};

export const getRegisterEffect = async (payload) => {
  const { username, email, password, photoUrl } = payload;
  const avatar =
    photoUrl ||
    "https://static2.yan.vn/YanNews/2167221/202003/dan-mang-du-trend-thiet-ke-avatar-du-kieu-day-mau-sac-tu-anh-mac-dinh-f4781c7a.jpg";
  let res = {};
  try {
    res = await axiosInstance.post("/auth/sign-up", {
      username,
      password,
      email,
      photoUrl: avatar,
    });
  } catch (error) {
    res = error.response;
  }
  return res;
};
