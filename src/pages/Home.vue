<template>
  <main>
    <section class="hero-band hero-band--home" :style="heroSectionStyle">
      <div class="wrap hero-layout hero-layout--centered">
        <div class="hero-copy hero-copy--centered">
          <p class="eyebrow reveal">Asociación Boliviana de Capital Semilla y Emprendedor</p>
          <h1 class="reveal">
            Asociación
            <br>
            Boliviana de Capital Semilla y Emprendedor
          </h1>
          <p class="hero-lede reveal">
            Creemos en el poder de las startups para transformar la economía. Por eso, brindamos capital inteligente y apoyo estratégico a emprendedores visionarios que están creando las soluciones del mañana.
          </p>

          <div class="hero-actions hero-actions--centered reveal">
            <RouterLink class="btn btn-primary" to="/sobre-bocap">Conoce BOCAP</RouterLink>
            <RouterLink class="btn btn-secondary" to="/contacto#membership">Hazte miembro</RouterLink>
          </div>
          <div class="hero-visual-controls reveal">
            <button class="hero-banner__arrow" type="button" aria-label="Imagen anterior" @click="goToPreviousHero">
              ‹
            </button>
            <div class="hero-banner__dots" aria-label="Indicadores del carrusel">
              <button
                v-for="(slide, index) in heroSlides"
                :key="slide.image"
                class="hero-banner__dot"
                :class="{ active: index === activeHeroIndex }"
                type="button"
                :aria-label="`Ver slide ${index + 1}`"
                @click="setActiveHero(index)"
              ></button>
            </div>
            <button class="hero-banner__arrow" type="button" aria-label="Imagen siguiente" @click="goToNextHero">
              ›
            </button>
          </div>
        </div>

        <div class="hero-stats reveal">
          <article class="hero-stat">
            <span class="card-label">Conexión</span>
            <strong>Miembros, fondos, startups y aliados en una misma conversación.</strong>
          </article>
          <article class="hero-stat">
            <span class="card-label">Educación</span>
            <strong>Mejores prácticas para profesionalizar la inversión temprana.</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="home-intro">
          <div class="home-intro__media reveal">
            <div class="home-intro__visual">
              <img
                class="home-intro__image"
                :src="aboutUsImage"
                alt="Equipo y comunidad de BOCAP"
              />
            </div>
          </div>

          <div class="home-intro__copy reveal">
            <p class="eyebrow">Sobre nosotros</p>
            <h2><span>Impulsando</span> el venture capital en Bolivia</h2>
            <p>
              BOCAP promueve una comunidad más fuerte entre quienes invierten, construyen startups, aceleran compañías y generan condiciones para el crecimiento del ecosistema.
            </p>
            <p>
              Nuestro foco es conectar actores relevantes, producir información útil y abrir acceso a mejores prácticas de inversión y colaboración regional.
            </p>
            <RouterLink class="btn btn-primary" to="/sobre-bocap">Conocer más</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--dark-band section--why-bocap-band">
      <div class="wrap">
        <div class="section-head section-head--why-bocap reveal">
          <div>
            <p class="eyebrow">¿Por qué BOCAP?</p>
            <h2><span>Impulsando</span> el venture capital en Bolivia</h2>
          </div>
          <div class="section-head__body">
            <p>
              En BOCAP, creemos en el poder del capital emprendedor para transformar industrias y fortalecer la economía del futuro.
            </p>
            <p>
              Nacemos con el propósito de conectar, educar y brindar acceso a información clave a los actores del ecosistema emprendedor boliviano, permitiendo su integración con el movimiento global de venture capital.
            </p>
          </div>
        </div>
        <div class="why-bocap-grid">
          <article v-for="pillar in whyBocapPillars" :key="pillar.title" class="feature-card feature-card--pillar reveal">
            <div class="feature-card__icon" aria-hidden="true">
              <svg v-if="pillar.icon === 'globe'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M3 12h18"></path>
                <path d="M12 3a15 15 0 0 1 0 18"></path>
                <path d="M12 3a15 15 0 0 0 0 18"></path>
              </svg>
              <svg v-else-if="pillar.icon === 'institution'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 21h18"></path>
                <path d="M5 21V10"></path>
                <path d="M10 21V10"></path>
                <path d="M14 21V10"></path>
                <path d="M19 21V10"></path>
                <path d="M2 10h20"></path>
                <path d="M12 3 2 10"></path>
                <path d="m12 3 10 7"></path>
              </svg>
              <svg v-else-if="pillar.icon === 'chart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 20V10"></path>
                <path d="M10 20V4"></path>
                <path d="M16 20v-7"></path>
                <path d="M22 20v-4"></path>
                <path d="M3 20h19"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 19c4.5-1 8.5-5 9.5-9.5L19 5l.5 4.5C18.5 14 14 18.5 9.5 19.5L5 19Z"></path>
                <path d="M14 10 9 15"></path>
                <path d="M6 14c-1 0-2 .8-2 1.8V19h3.2C8.2 19 9 18 9 17"></path>
                <circle cx="16.5" cy="7.5" r="1"></circle>
              </svg>
            </div>
            <div class="feature-card__body feature-card__body--pillar">
              <span class="card-label">{{ pillar.label }}</span>
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--regional-home">
      <div class="wrap regional-home">
        <div class="regional-home__content reveal">
          <p class="eyebrow">Bolivia y Latinoamérica</p>
          <h2>Bolivia entra mejor a la conversación regional cuando conecta con relaciones, criterio y visibilidad real.</h2>
          <p class="regional-home__lede">
            BOCAP abre puentes con fondos, asociaciones y actores clave de América Latina para acelerar aprendizaje, coinversión y mejores prácticas para el ecosistema boliviano.
          </p>

          <div class="regional-home__signals">
            <article v-for="signal in regionalSignals" :key="signal.title" class="regional-home__signal">
              <span class="card-label">{{ signal.label }}</span>
              <h3>{{ signal.title }}</h3>
              <p>{{ signal.description }}</p>
            </article>
          </div>

          <div class="regional-home__actions">
            <RouterLink class="btn btn-primary" to="/aliados">Ver aliados</RouterLink>
            <RouterLink class="btn btn-ghost" to="/sobre-bocap">Cómo conecta BOCAP</RouterLink>
          </div>
        </div>

        <div class="regional-home__board reveal">
          <div class="regional-home__network">
            <div class="regional-home__node regional-home__node--bolivia">
              <strong>Bolivia</strong>
              <span>Ecosistema local</span>
            </div>
            <div class="regional-home__node regional-home__node--latam">
              <strong>LatAm</strong>
              <span>Fondos y asociaciones</span>
            </div>
            <div class="regional-home__node regional-home__node--knowledge">
              <strong>Mejores prácticas</strong>
              <span>Aprendizaje aplicado</span>
            </div>
            <div class="regional-home__node regional-home__node--capital">
              <strong>Coinversión</strong>
              <span>Relaciones estratégicas</span>
            </div>
          </div>

          <div class="regional-home__metrics">
            <article v-for="metric in regionalMetrics" :key="metric.label" class="regional-home__metric">
              <span class="card-label">{{ metric.label }}</span>
              <strong>{{ metric.value }}</strong>
              <p>{{ metric.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--tinted section--explore">
      <div class="wrap">
        <div class="section-head section-head--centered section-head--explore reveal">
          <p class="eyebrow">Explorar</p>
          <h2>Accesos directos a las áreas clave de BOCAP.</h2>
          <p class="section-head__lede">
            Un mapa rápido para entender quién lidera BOCAP, cómo se compone la red de miembros y qué alianzas amplían el alcance del ecosistema.
          </p>
        </div>

        <div class="home-section-grid">
          <RouterLink
            v-for="item in homeSections"
            :key="item.to"
            class="feature-card reveal home-section-link"
            :to="item.to"
            :style="{ '--home-card-accent': item.accent, '--home-card-glow': item.glow }"
          >
            <div class="home-section-link__top">
              <span class="card-label">{{ item.label }}</span>
              <span class="home-section-link__index">{{ item.index }}</span>
            </div>
            <div class="home-section-link__icon" aria-hidden="true">
              <svg v-if="item.icon === 'directory'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19h16"></path>
                <path d="M6 17V8"></path>
                <path d="M12 17V5"></path>
                <path d="M18 17v-6"></path>
                <path d="M4 8h4"></path>
                <path d="M10 5h4"></path>
                <path d="M16 11h4"></path>
              </svg>
              <svg v-else-if="item.icon === 'members'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"></path>
                <circle cx="9.5" cy="7" r="3"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 4.13a3 3 0 0 1 0 5.74"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 16l4-4 4 4"></path>
                <path d="M12 12V3"></path>
                <path d="M20 14.5A4.5 4.5 0 0 0 16.5 7h-1.1A7 7 0 0 0 4 13.3"></path>
                <path d="M5 19h14"></path>
              </svg>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="home-section-link__footer">
              <span>{{ item.cta }}</span>
              <span class="home-section-link__arrow">↗</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import aboutUsImage from '../assets/bocap-aboutus.jpg'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { siteMeta } from '../data/siteContent.js'

const heroSlides = [
  { image: '/hero/hero-banner2.png' },
  { image: '/hero/hero-banner3.jpg' },
  { image: '/hero/hero-banner1.jpeg' },
  { image: '/hero/hero-banner4.avif' }
]

const activeHeroIndex = ref(0)
let heroRotationTimer = null

const activeHeroSlide = computed(() => heroSlides[activeHeroIndex.value])
const heroSectionStyle = computed(() => ({
  backgroundImage: `url('${activeHeroSlide.value.image}')`
}))

const homeSections = [
  {
    index: '01',
    label: 'Directorio',
    title: 'Conoce a quienes lideran BOCAP',
    description: 'Perfiles con experiencia en inversión, articulación institucional y construcción de ecosistema.',
    to: '/equipo',
    cta: 'Ver directorio',
    icon: 'directory',
    accent: '#ef2a23',
    glow: 'rgba(239, 42, 35, 0.18)'
  },
  {
    index: '02',
    label: 'Miembros',
    title: 'Explora la red de miembros',
    description: 'Fondos, inversionistas, aceleradoras, corporativos y actores que participan en la comunidad.',
    to: '/miembros',
    cta: 'Ver miembros',
    icon: 'members',
    accent: '#2e5b8d',
    glow: 'rgba(46, 91, 141, 0.18)'
  },
  {
    index: '03',
    label: 'Aliados',
    title: 'Revisa alianzas estratégicas',
    description: 'Organizaciones y redes que amplían la proyección regional y la capacidad de incidencia de BOCAP.',
    to: '/aliados',
    cta: 'Ver aliados',
    icon: 'allies',
    accent: '#c3923e',
    glow: 'rgba(195, 146, 62, 0.18)'
  }
]

const whyBocapPillars = [
  {
    label: 'Conexión',
    title: 'Conectamos Bolivia con el ecosistema global',
    description:
      'Vinculamos a founders, inversionistas y aliados con redes, fondos y asociaciones especializadas de América Latina y del mundo.',
    icon: 'globe'
  },
  {
    label: 'Educación',
    title: 'Promovemos mejores prácticas para crecer mejor',
    description:
      'Impulsamos formación aplicada para profesionalizar la inversión temprana, fortalecer capacidades y elevar estándares de mercado.',
    icon: 'institution'
  },
  {
    label: 'Inteligencia',
    title: 'Convertimos señales dispersas en datos estratégicos',
    description:
      'Desarrollamos reportes, benchmarks y lecturas de mercado para que las decisiones se tomen con más contexto y menos intuición aislada.',
    icon: 'chart'
  },
  {
    label: 'Impulso',
    title: 'Aceleramos la visibilidad de startups bolivianas',
    description:
      'Trabajamos para que más compañías locales lleguen mejor preparadas a capital, alianzas y conversación regional de venture capital.',
    icon: 'rocket'
  }
]

const regionalSignals = [
  {
    label: 'Relaciones',
    title: 'Puentes con actores que ya mueven capital en la región',
    description: 'Acercamos a Bolivia a fondos, asociaciones y redes con experiencia práctica en venture capital latinoamericano.'
  },
  {
    label: 'Visibilidad',
    title: 'Más presencia para el ecosistema boliviano fuera del país',
    description: 'Impulsamos narrativa, conexión y exposición para que startups e inversionistas locales entren mejor posicionados a la conversación regional.'
  },
  {
    label: 'Aprendizaje',
    title: 'Mejores prácticas que elevan estándares de mercado',
    description: 'Convertimos vínculos regionales en aprendizajes útiles sobre inversión temprana, gobernanza, acompañamiento y crecimiento.'
  }
]

const regionalMetrics = [
  {
    label: 'Relación',
    value: 'LatAm',
    description: 'Una agenda conectada con la conversación regional de venture capital.'
  },
  {
    label: 'Enfoque',
    value: '3 frentes',
    description: 'Visibilidad, mejores prácticas y acceso a relaciones de inversión.'
  },
  {
    label: 'Resultado',
    value: 'Más señal',
    description: 'Bolivia entra mejor posicionada cuando actúa como red, no como actor aislado.'
  }
]

const stopHeroRotation = () => {
  if (heroRotationTimer) {
    window.clearInterval(heroRotationTimer)
    heroRotationTimer = null
  }
}

const startHeroRotation = () => {
  stopHeroRotation()
  if (typeof window === 'undefined') return
  heroRotationTimer = window.setInterval(() => {
    activeHeroIndex.value = (activeHeroIndex.value + 1) % heroSlides.length
  }, 5000)
}

const setActiveHero = index => {
  activeHeroIndex.value = index
  startHeroRotation()
}

const goToNextHero = () => {
  activeHeroIndex.value = (activeHeroIndex.value + 1) % heroSlides.length
  startHeroRotation()
}

const goToPreviousHero = () => {
  activeHeroIndex.value = (activeHeroIndex.value - 1 + heroSlides.length) % heroSlides.length
  startHeroRotation()
}

onMounted(() => {
  startHeroRotation()
})

onBeforeUnmount(() => {
  stopHeroRotation()
})

usePageEnhancements(siteMeta.title)
</script>
