import { createRouter, createWebHistory } from "vue-router";
import Home from "./Views/Home.vue";
import Login from "./Views/Login.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/#header",
    name: "Header",
    component: Home,
    redirect: "/"
  },
  {
    path: "/#services",
    name: "Services",
    component: Home,
  },
  {
    path: "/#portfolio",
    name: "Portfolio",
    component: Home,
  },
  {
    path: "/#about",
    name: "About",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { x: 0, y: 0 };
  }
});

export default router;