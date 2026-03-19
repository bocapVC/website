<template>
  <div class="site-shell">
    <header class="site-header">
      <div class="wrap site-header__inner">
        <RouterLink class="brand" to="/" @click="closeNav" aria-label="BOCAP inicio">
          <img class="brand-logo" :src="brandLogo" alt="BOCAP" />
        </RouterLink>

        <button
          class="nav-toggle"
          type="button"
          :aria-expanded="isNavOpen ? 'true' : 'false'"
          aria-controls="site-navigation"
          aria-label="Abrir o cerrar navegación"
          @click="toggleNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="site-navigation" class="site-nav" :class="{ open: isNavOpen }">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" @click="closeNav">
            {{ link.label }}
          </RouterLink>
        </nav>

        <RouterLink class="btn btn-primary header-cta" to="/contacto" @click="closeNav">
          Contacto
        </RouterLink>
      </div>
    </header>

    <RouterView />

    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div class="footer-brand">
          <div class="brand brand--footer">
            <img class="brand-logo brand-logo--footer" :src="brandLogo" alt="BOCAP" />
          </div>
          <p>
            Impulsamos el desarrollo del capital emprendedor en Bolivia conectando inversión, conocimiento y colaboración regional.
          </p>
        </div>

        <div class="footer-column">
          <span class="footer-title">Principal</span>
          <RouterLink v-for="link in navLinks" :key="`footer-${link.to}`" :to="link.to">
            {{ link.label }}
          </RouterLink>
        </div>

        <div class="footer-column">
          <span class="footer-title">Contacto</span>
          <a :href="`mailto:${siteMeta.contactEmail}`">{{ siteMeta.contactEmail }}</a>
          <RouterLink to="/contacto#membership">Membresía</RouterLink>
          <RouterLink to="/contacto#alliances">Alianzas</RouterLink>
        </div>
      </div>

      <div class="wrap footer-bottom">
        <span>© {{ year }} BOCAP</span>
        <span>Bolivia · Capital emprendedor · Ecosistema latinoamericano</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import brandLogo from './assets/logo.png'
import { siteMeta } from './data/siteContent.js'

const year = new Date().getFullYear()
const route = useRoute()
const isNavOpen = ref(false)

const navLinks = [
  { label: 'Sobre Nosotros', to: '/sobre-bocap' },
  { label: 'Directorio', to: '/equipo' },
  { label: 'Miembros', to: '/miembros' },
  { label: 'Aliados', to: '/aliados' }
]

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

const closeNav = () => {
  isNavOpen.value = false
}

watch(() => route.fullPath, closeNav)
</script>
