import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Sorteios from '../views/Sorteios.vue';
import Sorteio from '../views/Sorteio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/sorteios',
    name: 'Sorteios',
    component: Sorteios,
  },
  {
    path: '/sorteio/:id',
    name: 'Sorteio',
    component: Sorteio,
  },
  // {
  //   path: "*",
  //   redirect: "/"
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
