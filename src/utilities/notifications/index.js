import { message } from "antd";

export const success = (noti) => {
  message.success(noti);
};

export const error = (noti) => {
  message.error(noti);
};

export const warning = (noti) => {
  message.warning(noti);
};
