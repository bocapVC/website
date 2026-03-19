<template>
  <main>
    <section class="page-hero page-hero--reports">
      <div class="wrap page-hero__content">
        <p class="eyebrow reveal">Reportes</p>
        <h1 class="reveal">Biblioteca editorial para entender mejor el mercado y elevar la calidad de las decisiones.</h1>
        <p class="page-lede reveal">
          Filtra por año, categoría y tema para revisar publicaciones que organizan información útil para el ecosistema boliviano.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="filter-panel reveal">
          <label class="form-field">
            <span>Año</span>
            <select v-model="activeYear">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
          </label>

          <label class="form-field">
            <span>Categoría</span>
            <select v-model="activeCategory">
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>
          </label>

          <label class="form-field">
            <span>Tema</span>
            <select v-model="activeTopic">
              <option v-for="topic in topics" :key="topic" :value="topic">{{ topic }}</option>
            </select>
          </label>
        </div>

        <div class="report-grid">
          <article v-for="report in filteredReports" :key="report.id" class="report-card reveal">
            <div class="report-cover">
              <span>{{ report.coverLabel }}</span>
              <strong>{{ report.year }}</strong>
            </div>
            <div class="report-body">
              <p class="meta-line">{{ report.category }} · {{ report.topic }}</p>
              <h2>{{ report.title }}</h2>
              <p>{{ report.summary }}</p>
              <div class="card-actions">
                <span>{{ report.date }}</span>
                <a :href="report.download" download>Descargar resumen</a>
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
import { reports } from '../data/siteContent.js'

const activeYear = ref('Todos')
const activeCategory = ref('Todas')
const activeTopic = ref('Todos')

const years = ['Todos', ...new Set(reports.map(report => report.year))]
const categories = ['Todas', ...new Set(reports.map(report => report.category))]
const topics = ['Todos', ...new Set(reports.map(report => report.topic))]

const filteredReports = computed(() => reports.filter(report => {
  const matchesYear = activeYear.value === 'Todos' || report.year === activeYear.value
  const matchesCategory = activeCategory.value === 'Todas' || report.category === activeCategory.value
  const matchesTopic = activeTopic.value === 'Todos' || report.topic === activeTopic.value
  return matchesYear && matchesCategory && matchesTopic
}))

usePageEnhancements('Reportes · BOCAP')
</script>
