<template>
  <main>
    <section class="section section--contact-page">
      <div class="wrap contact-layout">
        <div class="contact-copy reveal">
          <div class="contact-intro">
            <p class="eyebrow">Contacto</p>
            <h1>Abramos una conversación sobre membresía, alianzas, reportes o colaboración regional.</h1>
            <p class="page-lede">
              BOCAP trabaja con una agenda institucional abierta a actores que quieren fortalecer el capital emprendedor en Bolivia.
            </p>
          </div>

          <p class="eyebrow">Canales</p>
          <h2>Un punto de contacto para sumar capacidades al ecosistema.</h2>
          <div class="contact-stack">
            <article class="surface">
              <h3>Email institucional</h3>
              <a :href="`mailto:${siteMeta.contactEmail}`">{{ siteMeta.contactEmail }}</a>
            </article>
            <article id="membership" class="surface">
              <h3>Membresía</h3>
              <p>Si representas un fondo, una red de inversión, una aceleradora o un corporativo, conversemos sobre cómo sumarte a BOCAP.</p>
            </article>
            <article id="alliances" class="surface">
              <h3>Alianzas</h3>
              <p>Trabajamos con organizaciones locales y regionales interesadas en investigación, eventos, formación y articulación de comunidad.</p>
            </article>
            <article class="surface">
              <h3>Redes y presencia</h3>
              <p>LinkedIn institucional, newsletter editorial y comunidad de eventos en desarrollo como parte de la estrategia de visibilidad de BOCAP.</p>
            </article>
          </div>
        </div>

        <div class="surface reveal">
          <ContactForm
            :email="siteMeta.contactEmail"
            :topics="contactTopics"
            placeholder="Comparte el contexto de tu organización, la iniciativa o la colaboración que quieres activar con BOCAP."
            submit-label="Enviar mensaje"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ContactForm from '../components/ContactForm.vue'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { contactTopics, siteMeta } from '../data/siteContent.js'

usePageEnhancements('Contacto · BOCAP')
</script>
