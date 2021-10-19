// 封装localstorage操作
// 获取localstorage
import qs from "qs";
export const getItem = (name) => {
  const data = window.localStorage.getItem(name);
  try {
    return qs.parse(data);
  } catch (err) {
    return data;
  }
};
  // 设置localstorage
export const setItem = (name, value) => {
  if (typeof value === "object") {
    value = qs.stringify(value);
  }

  window.localStorage.setItem(name, value);
};
  // 清除localstorage
export const removeItem = (name) => {
  window.localStorage.removeItem(name);
};
