<template>
  <main>
    <section class="page-hero page-hero--news">
      <div class="wrap page-hero__content">
        <p class="eyebrow reveal">Noticias</p>
        <h1 class="reveal">Lecturas del ecosistema boliviano y latinoamericano para seguir la conversación correcta.</h1>
        <p class="page-lede reveal">
          Noticias, análisis y señales sobre inversión, startups, regulación y tendencias que impactan la industria.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="filter-bar reveal">
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

        <div class="news-grid">
          <article v-for="article in filteredNews" :key="article.id" class="news-card reveal">
            <span class="card-label">{{ article.category }}</span>
            <h2>{{ article.title }}</h2>
            <p class="meta-line">{{ article.date }}</p>
            <p>{{ article.excerpt }}</p>
            <button class="text-button" type="button" @click="activeArticleId = article.id">Leer más</button>
          </article>
        </div>

        <article v-if="activeArticle" class="surface article-detail reveal">
          <p class="eyebrow">Detalle seleccionado</p>
          <h2>{{ activeArticle.title }}</h2>
          <p class="meta-line">{{ activeArticle.category }} · {{ activeArticle.date }}</p>
          <p>{{ activeArticle.body }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePageEnhancements } from '../composables/usePageEnhancements.js'
import { news } from '../data/siteContent.js'

const activeCategory = ref('Todas')
const activeArticleId = ref(news[0]?.id ?? '')
const categories = ['Todas', ...new Set(news.map(article => article.category))]

const filteredNews = computed(() => {
  if (activeCategory.value === 'Todas') return news
  return news.filter(article => article.category === activeCategory.value)
})

const activeArticle = computed(() => {
  return filteredNews.value.find(article => article.id === activeArticleId.value) ?? filteredNews.value[0] ?? null
})

usePageEnhancements('Noticias · BOCAP')
</script>
