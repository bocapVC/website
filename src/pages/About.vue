<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="wrap about-hero__content">
        <RouterLink class="about-breadcrumb" to="/">← Volver al inicio</RouterLink>
        <p class="about-label reveal">Miyabi Román</p>
        <h1 class="reveal">Arquitectura japonesa.</h1>
        <p class="about-hero__text reveal">
          Arquitecta nacida en Kanazawa y formada en Barcelona. Fusiono la sensibilidad artesanal japonesa con la
          innovación del diseño contemporáneo para crear espacios que abracen bienestar, luz y armonía.
        </p>
        <div class="about-hero__cta reveal">
          <RouterLink class="btn primary" to="/#portfolio">Ver portafolio</RouterLink>
          <a class="btn outline" href="https://wa.me/59175954374" target="_blank" rel="noopener">Agenda una conversación</a>
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
          <p>Nació en Kanazawa, una ciudad tradicional en la costa este de Japón, reconocida por su herencia artesanal, jardines históricos y sensibilidad estética. Desde temprana edad mostró una inclinación hacia las artes visuales, la composición espacial y la armonía de los objetos en su entorno, intereses que más adelante la llevaron a dedicarse por completo a la arquitectura y el diseño de interiores.</p>
          <p>Arquitecta de formación, complementó su carrera con un posgrado en Diseño de Espacios Interiores en BAU, Centro Universitario de Diseño de Barcelona (España). Esta experiencia académica y cultural en Europa marcó profundamente su estilo, permitiéndole fusionar la sobriedad y precisión de la estética japonesa con la innovación y funcionalidad del diseño contemporáneo occidental.</p>
          <p>Su enfoque combina una mirada humanista y sensorial del diseño, incorporando principios de neuroarquitectura, filosofía japonesa y técnicas de Feng Shui. Su trabajo busca no solo embellecer los espacios, sino mejorar el bienestar emocional y mental de quienes los habitan, mediante una cuidada elección de materiales, iluminación, texturas y proporciones.</p>
          <p>Cada proyecto es concebido con intención: desde residencias privadas hasta espacios comerciales de alto nivel, desarrolla propuestas a medida y en diálogo cercano con cada cliente, logrando un equilibrio entre estética, funcionalidad y energía.</p>
          <p>Reconocida por su disciplina, compromiso y sensibilidad artística, se ha consolidado como una profesional que apuesta por una arquitectura emocional, consciente y profundamente arraigada en valores como la armonía, el silencio y la belleza esencial.</p>
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
