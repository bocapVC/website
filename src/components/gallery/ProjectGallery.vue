<template>
  <section class="project-gallery">
    <div class="wrap">
      <h2>{{ title }}</h2>
    </div>

    <div class="project-gallery__grid">
      <figure
        v-for="(item, index) in items"
        :key="item.src ?? index"
        :class="['project-gallery__item', item.class]"
        role="button"
        tabindex="0"
        :aria-label="`Ampliar ${item.alt}`"
        @click="openLightbox(index)"
        @keydown.enter.prevent="openLightbox(index)"
        @keydown.space.prevent="openLightbox(index)"
      >
        <img :src="item.src" :alt="item.alt">
        <figcaption>{{ item.alt }}</figcaption>
      </figure>
    </div>

    <GalleryLightbox
      v-model:open="lightbox.open"
      v-model:index="lightbox.index"
      :items="items"
    />
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import GalleryLightbox from './GalleryLightbox.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Experiencia visual'
  },
  items: {
    type: Array,
    default: () => []
  }
})

const lightbox = reactive({
  open: false,
  index: 0
})

const openLightbox = (index) => {
  if (!props.items.length) return
  lightbox.index = index
  lightbox.open = true
}
</script>
