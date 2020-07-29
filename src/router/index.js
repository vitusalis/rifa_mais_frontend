import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Sorteios from '../views/Sorteios.vue';
import Sorteio from '../views/Sorteio.vue';
import Iniciativas from '../views/Iniciativas.vue';
import Info from '../views/Info.vue';
import UserService from '../UserService'

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
    component: Sorteios,
  },

  {
    path: '/sorteio/:id',
    name: 'Sorteio',
    component: Sorteio,

  },
  {
    path: '/iniciativas',
    name: 'Iniciativas',
    component: Iniciativas,
  },

  {
    path: '/info',
    name: 'Info',
    component: Info,
  },
  {
    path: "*",
    redirect: "/"
  },

];

function loginIsValid() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (user) {
    return UserService.validateUser(user)
  }
  return false;
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuthentication && !loginIsValid()) {
    next({ name: "Login" });
  }
  else
    next();

})

export default router;
