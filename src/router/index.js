import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sorteios',
    name: 'Sorteios',
    component: () => import(/* webpackChunkName: Sorteios*/  "../views/Sorteios.vue"),
  },

  {
    path: '/sorteio/:id',
    name: 'Sorteio',
    component: () => import(/* webpackChunkName: Sorteio*/  "../views/Sorteio.vue"),

  },
  // {
  //   path: '/iniciativas',
  //   name: 'Iniciativas',
  //   component: () => import("../views/Iniciativas.vue"),
  // },

  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: Info*/  "../views/Info.vue"),
  },
  {
    path: '/about',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: Sobre*/  "../views/Sobre.vue"),
  },
  {
    path: "*",
    redirect: "/"
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
