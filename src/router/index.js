import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/animate",
    name: "Animate",
    component: () => import("../views/Animate.vue")
  },
  {
    path: "/cars",
    name: "Cars",
    component: () => import("../views/Cars/Cars.vue")
  },
  {
    path: "/car/:id",
    name: "Car",
    component: () => import("../views/Car/Car.vue")
  },
  {
    path: "/create",
    name: "Create",
    component: () => import("../views/CreateCar/Create.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
