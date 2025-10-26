<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="wrap about-hero__content">
        <RouterLink class="about-breadcrumb" to="/">← Volver al inicio</RouterLink>
        <p class="about-label reveal">Miyabi Román</p>
        <h1 class="reveal">Arquitectura emocional con raíz japonesa.</h1>
        <p class="about-hero__text reveal">
          Arquitecta nacida en Kanazawa y formada en Barcelona. Fusiono la sensibilidad artesanal japonesa con la
          innovación del diseño contemporáneo para crear espacios que abracen bienestar, luz y armonía.
        </p>
        <div class="about-hero__cta reveal">
          <RouterLink class="btn primary" to="/#portfolio">Ver portafolio</RouterLink>
          <RouterLink class="btn outline" to="/#contact">Agenda una conversación</RouterLink>
        </div>
      </div>
    </section>

    <section class="section wrap">
      <div class="stitle reveal">Biografía</div>
      <div class="about reveal">
        <div class="portrait">
          <img :src="portrait" alt="Retrato artístico de Miyabi Román">
        </div>
        <div>
          <h2>Miyabi Román · Arquitecta</h2>
          <p>Nací en Kanazawa, ciudad japonesa reconocida por su herencia artesanal y jardines históricos. Desde niña me cautivó la relación entre objetos, luz y silencio; esa curiosidad se transformó en vocación arquitectónica.</p>
          <p>Tras formarme como arquitecta amplié mis estudios con un posgrado en Diseño de Espacios Interiores en BAU, Centro Universitario de Diseño de Barcelona. Vivir en Europa me permitió entrelazar la sobriedad japonesa con la innovación del diseño occidental.</p>
          <p>Mi práctica integra neuroarquitectura, filosofía japonesa y Feng Shui para transformar la experiencia emocional de cada espacio. Trabajo con materiales honestos, iluminación sensible y proporciones pensadas para cuidar mente y cuerpo.</p>
          <p>Cada proyecto nace de un diálogo profundo: desde residencias privadas hasta espacios comerciales, construyo soluciones a medida que equilibran estética, funcionalidad y energía. Apuesto por una arquitectura consciente, disciplinada y poética, arraigada en valores de armonía y belleza esencial.</p>
        </div>
      </div>
    </section>

    <section class="about-pillars">
      <div class="wrap">
        <h2 class="reveal">Principios vivos</h2>
        <div class="about-pillars__grid">
          <article v-for="pillar in pillars" :key="pillar.title" class="about-pillars__item reveal">
            <span>{{ pillar.code }}</span>
            <h3>{{ pillar.title }}</h3>
            <p>{{ pillar.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-studio wrap">
      <div class="about-studio__intro reveal">
        <h2>Dos ciudades, una misma mirada</h2>
        <p>
          Kanazawa me conecta con la tradición, la calma y la memoria artesanal. Barcelona me ofrece
          experimentación, cultura de diseño y diálogo internacional. Entre ambos lugares construyo proyectos
          que respiran identidad y contemporaneidad.
        </p>
      </div>
      <div class="about-studio__grid">
        <article class="about-studio__card reveal">
          <h3>Kanazawa</h3>
          <p>Laboratorio de serenidad. Jardines, caligrafía y artes tradicionales nutren mi sensibilidad espacial.</p>
        </article>
        <article class="about-studio__card reveal">
          <h3>Barcelona</h3>
          <p>Resonancia creativa. La ciudad mediterránea impulsa la innovación funcional y la mezcla cultural.</p>
        </article>
        <article class="about-studio__card reveal">
          <h3>Red global</h3>
          <p>Trabajo con artesanos, ingenieros y artistas para materializar atmósferas precisas y sensibles.</p>
        </article>
      </div>
    </section>

    <section class="about-cta">
      <div class="wrap about-cta__content">
        <div class="about-cta__text reveal">
          <p class="about-label">Próximo paso</p>
          <h2>Construyamos un espacio que cuide a quienes lo habitan.</h2>
          <p>Comparte tu proyecto y diseñemos una atmósfera que integre armonía, intención y bienestar.</p>
        </div>
        <RouterLink class="btn primary reveal" to="/#contact">Conectar con el estudio</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const defaultTitle = typeof document !== 'undefined' ? document.title : 'Miyabi Architect'
const portrait = new URL('../assets/miyabi-portrait.jpg', import.meta.url).href

const pillars = [
  {
    code: '01',
    title: 'Sensibilidad japonesa',
    description: 'El legado artesanal de Kanazawa guía cada decisión, buscando equilibrio entre luz, silencio y materia.'
  },
  {
    code: '02',
    title: 'Formación internacional',
    description: 'La experiencia en BAU Barcelona aporta innovación funcional y visión contemporánea a cada proyecto.'
  },
  {
    code: '03',
    title: 'Neuroarquitectura aplicada',
    description: 'Diseñamos espacios que cuidan emociones y hábitos mediante proporciones, iluminación y texturas conscientes.'
  },
  {
    code: '04',
    title: 'Diálogo con el cliente',
    description: 'Cada interior se construye a medida, integrando Feng Shui y escucha activa para alinear belleza y energía.'
  }
]

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
  }, { threshold: 0.2 })
  document.querySelectorAll('.reveal').forEach(el => observer.value?.observe(el))
}

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.title = 'About · Miyabi Architect'
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
