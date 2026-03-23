<template>
  <main>
    <section class="page-hero page-hero--members">
      <div class="wrap page-hero__content">
        <p class="eyebrow reveal">Miembros</p>
        <h1 class="reveal">Directorio de actores que hoy construyen capital emprendedor en Bolivia.</h1>
        <p class="page-lede reveal">
          Explora fondos, inversionistas, aceleradoras, corporativos y organizaciones de soporte que forman parte de la comunidad BOCAP.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="members-intro reveal">
          <article class="surface members-intro__lead">
            <p class="eyebrow">Comunidad</p>
            <h2>Los miembros que hoy le dan forma al capital emprendedor en Bolivia desde inversión, tecnología y conexión regional.</h2>
            <p>
              Esta sección presenta a los miembros que hoy forman parte de BOCAP con presencia visible en el ecosistema. Cada perfil conecta con su sitio oficial para facilitar relación, exploración y oportunidades de colaboración.
            </p>
          </article>

          <div class="members-intro__stats">
            <article class="surface members-intro__stat">
              <strong>{{ members.length }}</strong>
              <span>miembros activos</span>
            </article>
            <article class="surface members-intro__stat">
              <strong>{{ categories.length }}</strong>
              <span>tipos de actor</span>
            </article>
            <article class="surface members-intro__stat">
              <strong>Web</strong>
              <span>acceso directo a sus sitios oficiales</span>
            </article>
          </div>
        </div>

        <div class="members-showcase-head reveal">
          <div>
            <p class="eyebrow">Miembros BOCAP</p>
            <h2>Organizaciones con rol activo en la construcción del ecosistema.</h2>
          </div>
          <p>
            Fondos, firmas y compañías que aportan capital, criterio, talento y red para impulsar una industria más conectada y visible.
          </p>
        </div>

        <div class="directory-grid members-grid">
          <article
            v-for="member in membersWithSiteMeta"
            :key="member.name"
            class="directory-card member-card reveal"
            :style="{ '--member-accent': member.accent, '--member-glow': member.glow }"
          >
            <div class="member-card__brand">
              <div class="member-card__brand-meta">
                <span class="card-label">{{ member.category }}</span>
                <a
                  class="member-card__site-link"
                  :href="member.website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitar web
                </a>
              </div>
              <div class="member-card__logo-wrap">
                <img
                  v-if="member.logo"
                  :class="['member-card__logo-image', member.logoClass]"
                  :src="member.logo"
                  :alt="`${member.name} logo`"
                />
                <div v-else class="member-card__logo" :class="{ 'member-card__logo--caps': member.wordmark === member.wordmark.toUpperCase() }">
                  {{ member.wordmark }}
                </div>
                <span class="member-card__site">{{ member.siteHost }}</span>
              </div>
            </div>

            <div class="member-card__body">
              <h2>{{ member.name }}</h2>
              <p class="meta-line">{{ member.type }}</p>
              <p>{{ member.description }}</p>

              <div class="member-card__tags">
                <span v-for="tag in member.focus" :key="tag">{{ tag }}</span>
              </div>

              <div class="member-card__actions">
                <div class="member-card__footer">
                  <span>Miembro BOCAP</span>
                  <span class="member-card__dot"></span>
                  <span>{{ member.region }}</span>
                </div>

                <a
                  class="btn btn-secondary member-card__cta"
                  :href="member.website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { members } from '../data/siteContent.js'

const categories = [...new Set(members.map(member => member.category))]
const membersWithSiteMeta = computed(() =>
  members.map(member => ({
    ...member,
    siteHost: new URL(member.website).hostname.replace(/^www\./, '')
  }))
)

usePageEnhancements('Miembros · BOCAP')
</script>
