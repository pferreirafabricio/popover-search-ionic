import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
});

export default router;
