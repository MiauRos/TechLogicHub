import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: HomeView,
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/SelectionView.vue'),
    },{
      path: '/ins',
      name: 'ins',
      component: () => import('../views/InscripcionesView.vue'),
    },{
      path: '/createCourse',
      name: 'createCourse',
      component: () => import('../views/createCourseView.vue'),
    },{
      path: '/editCourse',
      name: 'editCourse',
      component: () => import('../views/editCourseView.vue'),
    },
  ],
})

export default router
