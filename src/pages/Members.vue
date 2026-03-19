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
            <h2>Una red de fondos, inversionistas, plataformas y organizaciones que hoy le dan forma al capital emprendedor en Bolivia.</h2>
            <p>
              Este directorio reúne actores con capacidad de inversión, acompañamiento, conocimiento sectorial y conexión regional. No es solo una lista: es la fotografía de una industria que empieza a tomar estructura.
            </p>
          </article>

          <div class="members-intro__stats">
            <article class="surface members-intro__stat">
              <strong>{{ members.length }}</strong>
              <span>miembros visibles</span>
            </article>
            <article class="surface members-intro__stat">
              <strong>{{ categories.length - 1 }}</strong>
              <span>tipos de actor</span>
            </article>
            <article class="surface members-intro__stat">
              <strong>{{ filteredMembers.length }}</strong>
              <span>{{ activeCategory === 'Todos' ? 'resultados activos' : `en ${activeCategory}` }}</span>
            </article>
          </div>
        </div>

        <div class="filter-bar members-filter-bar reveal">
          <div class="members-filter-bar__label">
            <span class="card-label">Filtrar por tipo</span>
          </div>
          <div class="members-filter-bar__chips">
            <button
              v-for="category in categories"
              :key="category"
              class="filter-chip"
              :class="{ active: activeCategory === category }"
              type="button"
              @click="activeCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="directory-grid members-grid">
          <article
            v-for="member in filteredMembers"
            :key="member.name"
            class="directory-card member-card reveal"
            :style="{ '--member-accent': member.accent, '--member-glow': member.glow }"
          >
            <div class="member-card__brand">
              <div class="member-card__brand-meta">
                <span class="card-label">{{ member.category }}</span>
                <span class="member-card__region">{{ member.region }}</span>
              </div>
              <div class="member-card__logo-wrap">
                <div class="badge-mark member-card__badge">{{ member.badge }}</div>
                <div class="member-card__logo" :class="{ 'member-card__logo--caps': member.wordmark === member.wordmark.toUpperCase() }">
                  {{ member.wordmark }}
                </div>
              </div>
            </div>

            <div class="member-card__body">
              <h2>{{ member.name }}</h2>
              <p class="meta-line">{{ member.type }}</p>
              <p>{{ member.description }}</p>

              <div class="member-card__tags">
                <span v-for="tag in member.focus" :key="tag">{{ tag }}</span>
              </div>

              <div class="member-card__footer">
                <span>Miembro BOCAP</span>
                <span class="member-card__dot"></span>
                <span>{{ member.region }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { members } from '../data/siteContent.js'

const activeCategory = ref('Todos')
const categories = ['Todos', ...new Set(members.map(member => member.category))]

const filteredMembers = computed(() => {
  if (activeCategory.value === 'Todos') return members
  return members.filter(member => member.category === activeCategory.value)
})

usePageEnhancements('Miembros · BOCAP')
</script>
