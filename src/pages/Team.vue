<template>
  <main>
    <section class="page-hero page-hero--team team-hero" :style="teamHeroStyle">
      <div class="wrap page-hero__content team-hero__content">
        <div class="team-hero__copy">
          <p class="eyebrow reveal">Directorio</p>
          <h1 class="reveal">El liderazgo que impulsa BOCAP.</h1>
          <p class="page-lede reveal">
            Perfiles con experiencia en inversión, articulación y construcción de ecosistema para fortalecer el capital emprendedor en Bolivia.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap team-grid">
        <article v-for="member in teamMembers" :key="member.name" class="profile-card profile-card--board reveal">
          <div class="profile-media">
            <img v-if="member.photo" class="profile-photo" :src="member.photo" :alt="member.name" />
            <div v-else class="profile-avatar">{{ member.initials }}</div>
          </div>
          <div class="profile-content">
            <p class="card-label profile-role">{{ member.role }}</p>
            <h2>{{ member.name }}</h2>
            <p class="profile-bio">{{ member.summary }}</p>
            <a
              v-if="member.linkedin"
              class="text-link profile-link"
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver LinkedIn
            </a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import sobreNosotrosHeroImage from '../assets/sobre-nosotros-hero.jpg'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { teamMembers } from '../data/siteContent.js'

const teamHeroStyle = {
  '--team-hero-image': `url('${sobreNosotrosHeroImage}')`
}

usePageEnhancements('Directorio · BOCAP')
</script>
