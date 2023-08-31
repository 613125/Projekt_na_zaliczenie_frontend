import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../views/RegisterView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import("../views/DashboardView.vue"),
    meta: {
      authRequired: true,
    },
  },

  {
    path: "/bookshelf",
    name: "bookshelf",
    component: () =>
      import("../views/BookView.vue"),
    meta: {
      authRequired: true,
  }
  },
  {
    path: "/movieshelf",
    name: "movieshelf",
    component: () =>
      import("../views/MovieView.vue"),
    meta: {
      authRequired: true,
  }
  },
  {
    path: "/gameshelf",
    name: "gameshelf",
    component: () =>
      import("../views/GamesView.vue"),
    meta: {
      authRequired: true,
  }
  },

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();

  if (to.matched.some((record) => record.meta.authRequired)) {
    if (auth.currentUser) {
      next();
    } else {
      alert("Musisz się najpierw zalogować");
      router.push("/");
    }
  } else {
    next();
  }
});

export default router;
