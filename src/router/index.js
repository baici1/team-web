import { createRouter, createWebHistory } from 'vue-router';
// 管理登录注册页面路由
import Login from './modules/login';
// 管理个人中心的路由
import User from './modules/user';
// 管理首页的路由
import Home from './modules/home';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    ...Login,
    ...User,
    ...Home,
    // ...redirect, // 统一的重定向配置
  ],
  scrollBehavior(to, from, savedPosition) {
    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    // 这个跟你使用 router.go() 或 router.back() 效果一致
    // 这里主要处理当你的home滚动再底部，跳转页面也是底部的bug情况
    // 主要是让页面回到顶部
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
export default router;

/* 菜单栏的路由 */
// 固定菜单
// export const fixedRoutes = [];
// // 动态菜单
// export const asyncRoutes = [...home, ...test];
