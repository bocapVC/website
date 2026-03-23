<template>
  <main class="about-page">
    <section class="page-hero page-hero--about about-hero" :style="{ '--about-hero-image': `url(${aboutHeroImage})` }">
      <div class="wrap about-hero__content">
        <div class="about-hero__copy">
          <p class="eyebrow reveal">Sobre BOCAP</p>
          <h1 class="reveal">La plataforma que articula el capital emprendedor en Bolivia.</h1>

          <div class="about-hero__stats">
            <article v-for="stat in aboutStats" :key="stat.label" class="about-stat reveal">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--about-overview">
      <div class="wrap about-overview">
        <article class="about-overview__lead reveal">
          <div class="about-overview__lead-card">
            <p class="eyebrow">Quiénes somos</p>
            <h2>Le damos forma a una industria que recién está despegando.</h2>
            <p>{{ aboutSections.whoWeAre }}</p>

            <div class="about-overview__tags">
              <span v-for="tag in aboutLeadTags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </article>

        <div class="about-overview__stack">
          <article v-for="(point, index) in aboutSignals" :key="point.title" class="surface about-note reveal">
            <div class="about-note__meta">
              <span class="about-note__index">0{{ index + 1 }}</span>
              <span class="card-label">{{ point.label }}</span>
            </div>
            <h3>{{ point.title }}</h3>
            <p>{{ point.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="wrap about-feature-block about-feature-block--goals">
        <div class="about-feature-block__media reveal">
          <img :src="strategicGoalsImage" alt="Encuentro institucional de BOCAP" />

          <div class="about-feature-block__media-card">
            <span class="card-label">Construcción de mercado</span>
            <strong>Cuatro frentes para ordenar una industria en formación.</strong>
            <p>Agenda sectorial, inteligencia de mercado, capacidades y proyección regional trabajan sobre el mismo mapa.</p>
          </div>
        </div>

        <div class="about-feature-block__content">
          <div class="section-head reveal">
            <p class="eyebrow">Objetivos estratégicos</p>
            <h2>Cuatro apuestas para que el capital emprendedor en Bolivia deje de ser intuición aislada y gane estructura de mercado.</h2>
          </div>

          <div class="feature-grid feature-grid--about">
            <article v-for="goal in institutionalGoals" :key="goal.title" class="feature-card reveal">
              <span class="card-label">{{ goal.label }}</span>
              <h3>{{ goal.title }}</h3>
              <p>{{ goal.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <article class="surface about-directory-callout reveal">
          <div class="about-directory-callout__media">
            <img :src="directoryImage" alt="Directorio de BOCAP" />
            <span class="about-directory-callout__badge">Directorio BOCAP</span>
          </div>

          <div class="about-directory-callout__content">
            <p class="eyebrow">Directorio</p>
            <h2>El liderazgo de BOCAP vive en una sección propia.</h2>
            <p>
              Reunimos perfiles con experiencia en inversión, articulación institucional y construcción de ecosistema. El directorio completo está disponible en su página dedicada.
            </p>

            <div class="about-directory-callout__tags">
              <span>Inversión</span>
              <span>Gobernanza</span>
              <span>Ecosistema</span>
            </div>

            <div>
              <RouterLink class="btn btn-primary" to="/equipo">Ver directorio</RouterLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="wrap regional-band regional-band--about reveal">
        <div class="regional-band__intro">
          <p class="eyebrow">Bolivia y Latinoamérica</p>
          <h2>Bolivia no necesita mirar la región desde afuera. Necesita entrar con relaciones, narrativa y capital inteligente.</h2>
          <p>
            Por eso construimos puentes con fondos, asociaciones y actores regionales capaces de acelerar aprendizaje, coinversión, visibilidad y mejores prácticas para el ecosistema boliviano.
          </p>

          <div class="regional-band__tags">
            <span>Coinversión</span>
            <span>Aprendizaje compartido</span>
            <span>Visibilidad regional</span>
          </div>
        </div>

        <div class="regional-band__visual">
          <img :src="regionalImage" alt="Conexión regional de BOCAP con Latinoamérica" />

          <div class="regional-band__card">
            <span class="card-label">Red regional</span>
            <strong>Puentes reales con fondos, asociaciones y aliados de LatAm.</strong>
            <p>La conversación regional se vuelve útil cuando se traduce en vínculos, aprendizaje y capital inteligente para Bolivia.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import aboutOverviewImage from '../assets/about-hero.jpg'
import aboutHeroImage from '../assets/directorio-equipo.jpg'
import directoryImage from '../assets/directorio-equipo.jpg'
import strategicGoalsImage from '../assets/bocap-aboutus.jpg'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { aboutSections, institutionalGoals } from '../data/siteContent.js'

const aboutStats = [
  { value: '1ra', label: 'red de venture capital en Bolivia' },
  { value: '4', label: 'ejes para construir mercado' },
  { value: 'LatAm', label: 'aprendizaje, visibilidad y coinversión' }
]

const aboutSignals = [
  {
    label: 'Industria',
    title: 'Una voz común para una industria naciente',
    description:
      'Reunimos a actores que antes avanzaban por separado para coordinar prioridades, visión de largo plazo y lenguaje común.'
  },
  {
    label: 'Conexión',
    title: 'Capital, founders y aliados en la misma conversación',
    description:
      'Conectamos a quienes invierten, construyen startups y fortalecen el entorno emprendedor para volver la colaboración más estructural.'
  },
  {
    label: 'Criterio',
    title: 'Capital inteligente, no solo dinero',
    description:
      'Impulsamos reportes, aprendizaje aplicado y mejores prácticas para movilizar también conocimiento, contactos y acompañamiento.'
  }
]

const aboutLeadTags = ['Capital inteligente', 'Conexión estratégica', 'Mejores prácticas']
const regionalImage = aboutOverviewImage

usePageEnhancements('Sobre BOCAP · BOCAP')
</script>
