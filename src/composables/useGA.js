const buildPagePath = () => `${window.location.pathname}${window.location.hash || ''}`

export const useGA = router => {
  if (typeof window === 'undefined') return

  const gaId = import.meta.env.VITE_GA_ID?.trim()

  if (!gaId) {
    console.info('[GA] VITE_GA_ID no está configurado. Analytics no se cargó.')
    return
  }

  if (!document.head.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${gaId}"]`)) {
    const externalScript = document.createElement('script')
    externalScript.async = true
    externalScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(externalScript)
  }

  if (!window.dataLayer) {
    window.dataLayer = []
  }

  if (!window.gtag) {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId, { send_page_view: false })
  }

  const trackPageView = () => {
    const pagePath = buildPagePath()
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: `${window.location.origin}${pagePath}`,
      page_path: pagePath
    })
  }

  router.isReady().then(trackPageView)
  router.afterEach(() => trackPageView())
}
