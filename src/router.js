import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Project from './pages/Project.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior() { return { top: 0 } },
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects/:slug', component: Project, props: true },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})
