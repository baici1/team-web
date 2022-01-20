// 用户主页显示的路由管理
const Home = () => import('@/views/home/index.vue');
const Game = () => import('@/views/game/index.vue');
const Details = () => import('@/views/details/index.vue');
const List = () => import('@/views/pagesList/index.vue');
export default [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: Details,
  },
  {
    path: '/pages/:position',
    name: 'List',
    component: List,
  },
];
