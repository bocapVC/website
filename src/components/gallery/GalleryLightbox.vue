<template>
  <Teleport to="body">
    <transition name="lightbox-fade">
      <div
        v-if="open"
        class="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="dialogLabel"
        @click.self="close"
      >
        <button
          type="button"
          class="gallery-lightbox__close"
          aria-label="Cerrar galería"
          @click="close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div class="gallery-lightbox__content">
          <button
            v-if="canNavigate"
            type="button"
            class="gallery-lightbox__nav gallery-lightbox__nav--prev"
            aria-label="Ver imagen anterior"
            @click="goPrevious"
          >
            <span aria-hidden="true">&lsaquo;</span>
          </button>
          <figure class="gallery-lightbox__figure">
            <div class="gallery-lightbox__media" role="group" :aria-roledescription="figureRoleDescription">
              <img
                v-if="currentItem"
                :src="currentItem.src"
                :alt="currentItem.alt"
              >
            </div>
            <figcaption class="gallery-lightbox__caption">
              <span>{{ captionCounter }}</span>
              <span>{{ currentItem?.alt }}</span>
            </figcaption>
          </figure>
          <button
            v-if="canNavigate"
            type="button"
            class="gallery-lightbox__nav gallery-lightbox__nav--next"
            aria-label="Ver imagen siguiente"
            @click="goNext"
          >
            <span aria-hidden="true">&rsaquo;</span>
          </button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  open: {
    type: Boolean,
    default: false
  },
  index: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:open', 'update:index'])

const totalItems = computed(() => props.items.length)

const normalizedIndex = computed(() => {
  if (!totalItems.value) return 0
  const mod = props.index % totalItems.value
  return mod >= 0 ? mod : mod + totalItems.value
})

const currentItem = computed(() => props.items[normalizedIndex.value] ?? null)

const canNavigate = computed(() => totalItems.value > 1)

const captionCounter = computed(() => {
  if (!totalItems.value) return ''
  return `${normalizedIndex.value + 1} / ${totalItems.value}`
})

const dialogLabel = computed(() => currentItem.value?.alt ?? 'Galería de imágenes')

const figureRoleDescription = 'Imagen mostrada en la galería'

const close = () => {
  emit('update:open', false)
}

const goNext = () => {
  if (!totalItems.value) return
  emit('update:index', (normalizedIndex.value + 1) % totalItems.value)
}

const goPrevious = () => {
  if (!totalItems.value) return
  emit('update:index', (normalizedIndex.value - 1 + totalItems.value) % totalItems.value)
}

const handleKeydown = (event) => {
  if (!props.open) return
  switch (event.key) {
    case 'Escape':
      event.preventDefault()
      close()
      break
    case 'ArrowRight':
      event.preventDefault()
      goNext()
      break
    case 'ArrowLeft':
      event.preventDefault()
      goPrevious()
      break
  }
}

let previousOverflow = ''

watch(
  () => props.open,
  (isOpen) => {
    if (typeof document === 'undefined') return
    if (isOpen) {
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = previousOverflow
    }
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = previousOverflow
  }
})
</script>
