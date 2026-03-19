<template>
  <main>
    <section class="page-hero page-hero--events">
      <div class="wrap page-hero__content">
        <p class="eyebrow reveal">Eventos</p>
        <h1 class="reveal">Una agenda para conectar capital, conocimiento y conversación sectorial.</h1>
        <p class="page-lede reveal">
          Revisa próximos encuentros y sesiones pasadas que ayudan a consolidar la comunidad de inversión y emprendimiento.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">Próximos eventos</p>
          <h2>Instancias para participar, aprender y abrir nuevas relaciones dentro del ecosistema.</h2>
        </div>

        <div class="event-grid">
          <article v-for="event in eventsUpcoming" :key="event.title" class="event-card reveal">
            <span class="card-label">{{ event.date }}</span>
            <h2>{{ event.title }}</h2>
            <p class="meta-line">{{ event.format }}</p>
            <p>{{ event.summary }}</p>
            <a class="text-link" :href="event.cta">Registrarme</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--tinted">
      <div class="wrap">
        <div class="section-head reveal">
          <p class="eyebrow">Eventos pasados</p>
          <h2>Conversaciones recientes que ya dejaron aprendizajes y nuevas líneas de trabajo.</h2>
        </div>

        <div class="event-grid event-grid--past">
          <article v-for="event in eventsPast" :key="event.title" class="event-card reveal">
            <span class="card-label">{{ event.date }}</span>
            <h2>{{ event.title }}</h2>
            <p class="meta-line">{{ event.format }}</p>
            <p>{{ event.summary }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { eventsPast, eventsUpcoming } from '../data/siteContent.js'

usePageEnhancements('Eventos · BOCAP')
</script>
