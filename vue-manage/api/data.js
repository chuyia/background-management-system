import axios from "./axios";

export const getMenu = (param) => {
  return axios.request({
    url: "/permission/getMenu",
    method: "POST",
    data: param,
  });
};

export const getData = () => {
  return axios.request({
    url: "/home/getData",
    method: "get",
  });
};

export const getUserList = (params) => {
  return axios.request({
    url: "/user/getUser",
    method: "get",
    params
  });
};
