const User = () => import('@/views/display/user/index.vue');
export default [
  {
    path: '/display/user',
    name: 'User',
    component: User,
  },
];
