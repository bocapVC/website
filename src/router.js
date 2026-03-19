import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Team from './pages/Team.vue'
import Members from './pages/Members.vue'
import Allies from './pages/Allies.vue'
import Reports from './pages/Reports.vue'
import Contact from './pages/Contact.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/sobre-bocap', component: About },
    { path: '/equipo', component: Team },
    { path: '/miembros', component: Members },
    { path: '/aliados', component: Allies },
    { path: '/reportes', component: Reports },
    { path: '/eventos', redirect: '/reportes' },
    { path: '/noticias', redirect: '/reportes' },
    { path: '/contacto', component: Contact },
    { path: '/about', redirect: '/sobre-bocap' },
    { path: '/projects', redirect: '/reportes' },
    { path: '/projects/:slug', redirect: '/reportes' },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})
