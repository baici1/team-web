/**
 * @description 这里主要关于登录和注册的页面路由
 *
 */

const Login = () => import("@/views/login/index.vue");
export default [
  {
    path: "/login",
    name: "login",
    component: Login
  }
];
