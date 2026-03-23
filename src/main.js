import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { useGA } from './composables/useGA.js'
import { applyRouteSeo } from './config/seo.js'
import { getOrganizationStructuredData, getWebsiteStructuredData } from './utils/structuredData.js'
import './styles.css'

const injectStructuredData = (id, payload) => {
  if (typeof document === 'undefined') return

  let script = document.getElementById(id)

  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    document.head.appendChild(script)
  }

  script.textContent = JSON.stringify(payload)
}

const app = createApp(App)
app.use(router)

useGA(router)

router.afterEach(to => {
  applyRouteSeo(to)
})

router.isReady().then(() => {
  applyRouteSeo(router.currentRoute.value)
  injectStructuredData('bocap-organization-schema', getOrganizationStructuredData())
  injectStructuredData('bocap-website-schema', getWebsiteStructuredData())
  app.mount('#app')
})
