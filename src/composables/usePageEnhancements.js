import { onBeforeUnmount, onMounted, ref } from 'vue'
import { seoConfig } from '../config/seo.js'

export function usePageEnhancements(title) {
  const observer = ref(null)
  const defaultTitle = typeof document !== 'undefined' ? document.title : seoConfig.defaultTitle

  const observeReveal = () => {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return

    observer.value = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          observer.value?.unobserve(entry.target)
        }
      })
    }, { threshold: 0.16 })

    document.querySelectorAll('.reveal').forEach(element => observer.value?.observe(element))
  }

  onMounted(() => {
    if (typeof document !== 'undefined') {
      document.title = title
    }
    observeReveal()
  })

  onBeforeUnmount(() => {
    observer.value?.disconnect()
    if (typeof document !== 'undefined') {
      document.title = defaultTitle
    }
  })
}
