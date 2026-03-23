import { seoConfig } from '../config/seo.js'

export const getOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: seoConfig.organizationName,
  legalName: seoConfig.legalName,
  url: seoConfig.baseUrl,
  description: seoConfig.defaultDescription,
  email: seoConfig.contactEmail,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: seoConfig.contactEmail,
      availableLanguage: ['es']
    }
  ],
  sameAs: [seoConfig.linkedinUrl]
})

export const getWebsiteStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: seoConfig.organizationName,
  url: seoConfig.baseUrl,
  description: seoConfig.defaultDescription,
  inLanguage: 'es'
})
