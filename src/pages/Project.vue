<template>
  <main v-if="project" class="project-page">
    <section class="project-hero" :style="heroStyle">
      <div class="project-hero__content wrap">
        <RouterLink class="project-breadcrumb" to="/#portfolio">← Volver al portafolio</RouterLink>
        <div class="project-hero__info">
          <div>
            <p class="project-label">Proyecto destacado</p>
            <h1>{{ project.title }}</h1>
            <p class="project-hero__excerpt">{{ project.description }}</p>
          </div>
          <ul class="project-meta">
            <li>
              <span>Ubicación</span>
              <strong>{{ project.location }}</strong>
            </li>
            <li>
              <span>Tipología</span>
              <strong>{{ project.type }}</strong>
            </li>
          </ul>
        </div>
        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </section>

    <section class="project-overview wrap">
      <div class="project-overview__concept">
        <h2>Idea matriz</h2>
        <p>{{ project.concept }}</p>
      </div>
      <div class="project-overview__cards">
        <article class="project-card">
          <span>Localización</span>
          <strong>{{ project.location }}</strong>
        </article>
        <article class="project-card">
          <span>Tipología</span>
          <strong>{{ project.type }}</strong>
        </article>
        <article class="project-card" v-if="project.tags.length">
          <span>Enfoques</span>
          <strong>{{ project.tags.join(' · ') }}</strong>
        </article>
      </div>
    </section>

    <section v-if="highlightedTags.length" class="project-highlights wrap">
      <h2>Capas sensoriales</h2>
      <div class="project-highlights__grid">
        <article v-for="item in highlightedTags" :key="item.tag" class="project-highlight">
          <span>{{ item.label }}</span>
          <strong>{{ item.tag }}</strong>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <ProjectGallery v-if="gallery.length" :items="gallery" />

    <section class="project-navigation wrap">
      <div class="project-navigation__links">
        <RouterLink v-if="previousProject" :to="`/projects/${previousProject.slug}`" class="nav-link prev">
          <span>Proyecto anterior</span>
          <strong>{{ previousProject.title }}</strong>
        </RouterLink>
        <RouterLink v-if="nextProject" :to="`/projects/${nextProject.slug}`" class="nav-link next">
          <span>Siguiente proyecto</span>
          <strong>{{ nextProject.title }}</strong>
        </RouterLink>
      </div>
    </section>
  </main>

  <main v-else class="project-page--missing">
    <div>
      <p>Este proyecto no está disponible.</p>
      <RouterLink class="btn" to="/#portfolio">Regresar al portafolio</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import projects from '../projects/data.js'
import ProjectGallery from '../components/gallery/ProjectGallery.vue'

const route = useRoute()
const router = useRouter()

const project = computed(() => projects.find(p => p.slug === route.params.slug))

watch(project, value => {
  if (!value) {
    router.replace('/')
  }
}, { immediate: true })

const projectIndex = computed(() => projects.findIndex(p => p.slug === route.params.slug))

const nextProject = computed(() => {
  if (projectIndex.value === -1 || projects.length <= 1) return null
  const nextIndex = (projectIndex.value + 1) % projects.length
  return nextIndex === projectIndex.value ? null : projects[nextIndex]
})

const previousProject = computed(() => {
  if (projectIndex.value === -1 || projects.length <= 1) return null
  const prevIndex = (projectIndex.value - 1 + projects.length) % projects.length
  return prevIndex === projectIndex.value ? null : projects[prevIndex]
})

const heroStyle = computed(() => {
  const cover = project.value?.cover
  return cover ? { backgroundImage: `url('${cover}')` } : {}
})

const gallery = computed(() => project.value?.gallery ?? [])

const tagNarratives = {
  'Luz natural': 'Coreografiamos aperturas y reflejos que acompañan cada instante del día.',
  'Feng Shui': 'Orientaciones, circulaciones y elementos se equilibran para liberar el flujo vital.',
  'Neuroarquitectura': 'Espacios calibrados para inducir calma, foco y bienestar emocional sostenido.',
  'Simetría': 'Ritmos geométricos que ordenan la percepción y dignifican el recorrido.',
  'Luz cenital': 'La luz cae desde arriba como una brújula silenciosa que acompasa la experiencia.',
  'Bienestar': 'Cada decisión material y espacial se enfoca al confort sensorial del habitante.',
  'Shoji': 'Filtros translúcidos que regulan la privacidad y suavizan la presencia de la luz.',
  'Concentración': 'Secuencias espaciales que provocan foco profundo y silencios productivos.'
}

const highlightedTags = computed(() => {
  if (!project.value) return []
  return project.value.tags.map((tag, index) => ({
    tag,
    label: `Capa ${String(index + 1).padStart(2, '0')}`,
    description: tagNarratives[tag] ?? 'Detalle enfocado en el equilibrio entre estética y bienestar.'
  }))
})

const defaultTitle = typeof document !== 'undefined' ? document.title : 'Miyabi Architect'

watch(project, value => {
  if (typeof document === 'undefined') return
  document.title = value ? `${value.title} · Miyabi Architect` : defaultTitle
}, { immediate: true })

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return
  document.title = defaultTitle
})
</script>
