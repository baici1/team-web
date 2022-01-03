// 封装localstorage操作
// 获取localstorage
import qs from 'qs';
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
  let v;
  v = value;
  if (typeof value === 'object') {
    v = qs.stringify(value);
  }
  window.localStorage.setItem(name, v);
};
// 清除localstorage
export const removeItem = (name) => {
  window.localStorage.removeItem(name);
};
