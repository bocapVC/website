<template>
  <main>
    <section class="page-hero page-hero--allies">
      <div class="wrap page-hero__content">
        <p class="eyebrow reveal">Aliados</p>
        <h1 class="reveal">Alianzas que amplían la capacidad de incidencia, aprendizaje y proyección regional de BOCAP.</h1>
        <p class="page-lede reveal">
          Trabajamos con organizaciones que aportan red, conocimiento y espacios de colaboración para fortalecer el ecosistema boliviano.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap logo-grid">
        <article v-for="ally in allies" :key="ally.name" class="ally-card reveal">
          <div class="badge-mark badge-mark--soft">{{ ally.badge }}</div>
          <div>
            <p class="card-label">{{ ally.region }}</p>
            <h2>{{ ally.name }}</h2>
            <p>{{ ally.description }}</p>
            <p class="meta-line">{{ ally.impact }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="wrap impact-grid">
        <article class="feature-card reveal">
          <span class="card-label">Impacto</span>
          <h3>Más visibilidad para Bolivia</h3>
          <p>Las alianzas ayudan a posicionar actores locales ante redes regionales, fondos y espacios de conversación de mayor escala.</p>
        </article>
        <article class="feature-card reveal">
          <span class="card-label">Colaboración</span>
          <h3>Programas y contenidos compartidos</h3>
          <p>Co-creamos eventos, investigación y experiencias de formación que fortalecen capacidades y lenguaje común en la industria.</p>
        </article>
        <article class="feature-card reveal">
          <span class="card-label">Región</span>
          <h3>Puentes con Latinoamérica</h3>
          <p>BOCAP articula a Bolivia con una conversación regional donde la cooperación es clave para acelerar madurez de mercado.</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { allies } from '../data/siteContent.js'

usePageEnhancements('Aliados · BOCAP')
</script>
