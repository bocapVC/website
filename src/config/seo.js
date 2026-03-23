const baseUrl = 'https://bocap.vc'

export const seoConfig = {
  organizationName: 'BOCAP',
  legalName: 'Asociación Boliviana de Capital Semilla y Emprendedores',
  defaultTitle: 'BOCAP - Asociación Boliviana de Capital Semilla y Emprendedores',
  defaultDescription: 'Promoción y desarrollo de la industria del capital de riesgo en Bolivia',
  baseUrl,
  linkedinUrl: 'https://www.linkedin.com/company/bocap-bolivia',
  contactEmail: 'bocapbolivia@gmail.com',
  defaultImage: `${baseUrl}/bocap-share-logo.png`,
  themeColor: '#16263f'
}

export const routeSeo = {
  home: {
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    path: '/'
  },
  about: {
    title: 'Sobre BOCAP - Asociación Boliviana de Capital Semilla y Emprendedores',
    description: 'Conoce la misión, visión y agenda de BOCAP para fortalecer el capital emprendedor en Bolivia.',
    path: '/#/sobre-bocap'
  },
  team: {
    title: 'Directorio BOCAP - Liderazgo del capital emprendedor en Bolivia',
    description: 'Explora el directorio de líderes y referentes que impulsan BOCAP y el ecosistema de venture capital en Bolivia.',
    path: '/#/equipo'
  },
  members: {
    title: 'Miembros BOCAP - Fondos, firmas y actores del ecosistema',
    description: 'Descubre los miembros de BOCAP y las organizaciones que construyen capital emprendedor en Bolivia.',
    path: '/#/miembros'
  },
  allies: {
    title: 'Aliados BOCAP - Redes y alianzas estratégicas',
    description: 'Conoce las alianzas de BOCAP para ampliar visibilidad, aprendizaje y conexión regional desde Bolivia.',
    path: '/#/aliados'
  },
  reports: {
    title: 'Reportes BOCAP - Publicaciones sobre capital emprendedor en Bolivia',
    description: 'Accede a reportes, benchmarks y análisis de BOCAP sobre venture capital y ecosistema emprendedor boliviano.',
    path: '/#/reportes'
  },
  contact: {
    title: 'Contacto BOCAP - Membresía, alianzas y colaboración',
    description: 'Ponte en contacto con BOCAP para membresía, alianzas institucionales, reportes, eventos o colaboración regional.',
    path: '/#/contacto'
  }
}

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const ensureLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

export const resolveRouteSeo = route => {
  const seoKey = route.meta?.seoKey
  const pageSeo = seoKey ? routeSeo[seoKey] : null

  return {
    title: pageSeo?.title ?? seoConfig.defaultTitle,
    description: pageSeo?.description ?? seoConfig.defaultDescription,
    url: `${seoConfig.baseUrl}${pageSeo?.path ?? '/'}`,
    image: seoConfig.defaultImage
  }
}

export const applyRouteSeo = route => {
  if (typeof document === 'undefined') return

  const seo = resolveRouteSeo(route)
  document.title = seo.title

  ensureMetaTag('meta[name="description"]', {
    name: 'description',
    content: seo.description
  })
  ensureMetaTag('meta[name="theme-color"]', {
    name: 'theme-color',
    content: seoConfig.themeColor
  })
  ensureMetaTag('meta[property="og:title"]', {
    property: 'og:title',
    content: seo.title
  })
  ensureMetaTag('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description
  })
  ensureMetaTag('meta[property="og:url"]', {
    property: 'og:url',
    content: seo.url
  })
  ensureMetaTag('meta[property="og:image"]', {
    property: 'og:image',
    content: seo.image
  })
  ensureMetaTag('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: seo.title
  })
  ensureMetaTag('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description
  })
  ensureMetaTag('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: seo.image
  })
  ensureLinkTag('link[rel="canonical"]', {
    rel: 'canonical',
    href: seo.url
  })
}
