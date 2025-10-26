<template>
  <div>
    <header class="nav">
      <div class="wrap nav">
        <div class="brand">MIYABI <span>ARCHITECT</span></div>
        <nav>
          <RouterLink to="/">Inicio</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#portfolio' }">Portafolio</RouterLink>
          <RouterLink to="/about">Sobre mí</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }">Contacto</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer>
      <div class="wrap foot">
        <div>© {{ year }} Miyabi Architect</div>
        <div style="opacity:.75">Arquitectura emocional · Kanazawa / Barcelona</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
