// 用户主页显示的路由管理
const Home = () => import('@/views/home/index.vue');
export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];
