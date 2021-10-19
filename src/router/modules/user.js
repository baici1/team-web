const UserHome = () => import("@/views/user/index.vue");
export default [
  {
    path: "/user/home",
    name: "UserHome",
    component: UserHome
  }
];
