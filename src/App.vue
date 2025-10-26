<template>
  <div>
    <header class="nav">
      <div class="wrap nav">
        <div class="brand">MIYABI <span>ARCHITECT</span></div>
        <button
          class="nav-toggle"
          type="button"
          @click="toggleNav"
          :aria-expanded="isNavOpen ? 'true' : 'false'"
          aria-controls="primary-navigation"
          aria-label="Mostrar u ocultar menú principal"
        >
          <span class="nav-toggle__icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav id="primary-navigation" :class="{ open: isNavOpen }">
          <RouterLink to="/" @click="closeNav">Inicio</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#portfolio' }" @click="closeNav">Portafolio</RouterLink>
          <RouterLink to="/about" @click="closeNav">Sobre mí</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" @click="closeNav">Contacto</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer>
      <div class="wrap foot">
        <div class="foot-brand">
          <div class="foot-logo">MIYABI <span>ARCHITECT</span></div>
          <p>Arquitectura emocional que integra neuroarquitectura, luz precisa y calma japonesa para crear espacios que cuidan a sus habitantes.</p>
          <a class="btn primary foot-cta" href="https://wa.me/59175954374" target="_blank" rel="noopener">Agenda una conversación</a>
        </div>
        <div class="foot-column">
          <span class="foot-heading">Explora</span>
          <nav class="foot-links">
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#portfolio' }">Portafolio</RouterLink>
            <RouterLink to="/about">Sobre mí</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#contact' }">Contacto</RouterLink>
          </nav>
        </div>
        <div class="foot-column">
          <span class="foot-heading">Contacto</span>
          <div class="foot-links">
            <a href="mailto:miyabi.ro@gmail.com">miyabi.ro@gmail.com</a>
            <a href="https://wa.me/59175954374" target="_blank" rel="noopener">+591 75954374</a>
          </div>
          <div class="foot-meta">Cochabamba, Bolivia</div>
        </div>
        <div class="foot-column">
          <span class="foot-heading">Redes</span>
          <div class="foot-links">
            <a href="https://www.instagram.com/miyabi.architects/?hl=es" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>
      </div>
      <div class="wrap foot-bottom">
        <div>© {{ year }} Miyabi Architect</div>
        <div>Arquitectura emocional · Kanazawa / Barcelona</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()
const isNavOpen = ref(false)
const toggleNav = () => { isNavOpen.value = !isNavOpen.value }
const closeNav = () => { isNavOpen.value = false }
</script>
