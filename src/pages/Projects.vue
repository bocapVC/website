<template>
  <main class="projects-page">
    <section class="projects-hero section wrap">
      <RouterLink class="back-link reveal" to="/">← Volver al inicio</RouterLink>
      <p class="projects-label reveal">Portafolio completo</p>
      <h1 class="reveal">Colección de proyectos</h1>
      <p class="projects-intro reveal">
        Un recorrido por residencias, interiores y espacios comerciales diseñados desde la neuroarquitectura,
        la filosofía japonesa y el equilibrio energético.
      </p>
    </section>

    <section class="section wrap projects-gallery">
      <div class="grid projects-grid">
        <RouterLink
          v-for="project in projects"
          :key="project.slug"
          class="card reveal"
          :to="`/projects/${project.slug}`"
          :aria-label="`Abrir proyecto ${project.title}`"
        >
          <img :src="project.cover" :alt="project.alt">
          <div class="overlay">
            <div>
              <h3>{{ project.title }}</h3>
              <div class="meta">{{ project.location }} · {{ project.type }}</div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import projects from '../projects/data.js'

const defaultTitle = typeof document !== 'undefined' ? document.title : 'Miyabi Architect'
const observer = ref(null)

const observeReveal = () => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return
  observer.value = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        observer.value?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.18 })
  document.querySelectorAll('.reveal').forEach(el => observer.value?.observe(el))
}

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.title = 'Portafolio · Miyabi Architect'
  }
  observeReveal()
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
  if (typeof document !== 'undefined') {
    document.title = defaultTitle
  }
})
</script>

<style scoped>
.projects-hero {
  display: grid;
  gap: clamp(16px, 2vw, 24px);
  padding-top: clamp(72px, 12vw, 140px);
  padding-bottom: clamp(32px, 6vw, 64px);
}

.projects-label {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--fog-5);
}

.projects-intro {
  max-width: 48ch;
  color: var(--fog-6);
}

.back-link {
  font-size: 0.9rem;
  color: var(--fog-5);
  text-decoration: none;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: var(--fog-7);
}

.projects-gallery {
  padding-top: 0;
}

.projects-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.projects-grid .card {
  min-height: 100%;
}
</style>
