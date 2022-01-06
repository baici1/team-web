// 用户主页显示的路由管理
const Home = () => import('@/views/home/index.vue');
const List = () => import('@/views/list/index.vue');
export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list/:id',
    name: 'List',
    component: List,
  },
];
