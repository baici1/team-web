import axios from 'axios';
import store from '@/store';
// import router from "@/router";
// import { ElMessage } from "element-plus";

// 创建axios实例
const service = axios.create({
  baseURL: '/', // 设置基础url
  timeout: 10000, // 设置请求超时时间
  // withCredentials: true, 配置发送跨域请求时是否携带cokkie
});

// 拦截请求
service.interceptors.request.use(
  (config) => {
    const { authorization } = store.state.app; // 获取state.app.authorization里面的token值
    if (authorization) {
      config.headers.Authorization = `Bearer ${authorization.token}`; // 为每个请求添加token头部
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// 请求响应
service.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
export default service;
