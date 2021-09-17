import Vue from 'vue'
import Router from 'vue-router'
// import hero from '@/components/hero.vue'
// import beach from '@/components/beach.vue'
import fastfood from '@/components/fastfood.vue'
import research from '@/components/research.vue'

Vue.use(Router)

const routes = [{
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    redirect: '/fastfood/industry'
  },
  /*
  {
    path: '/',
    component: hero
  },
  */
  {
    path: '/beach',
    redirect: '/fastfood/industry'
  },
  {
    path: '/fastfood',
    redirect: '/fastfood/industry'
  },
  {
    path: '/fastfood/:name',
    component: fastfood,
    props: true
  },
  {
    path: '/research',
    component: research
  },
];

export default new Router({
  routes
})