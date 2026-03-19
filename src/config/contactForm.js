export const CONTACT_FORM_PROVIDERS = {
  GOOGLE_FORMS: 'google-forms',
  MAILTO: 'mailto'
}

export const contactFormConfig = {
  provider: CONTACT_FORM_PROVIDERS.GOOGLE_FORMS,
  recipientEmail: 'contacto@bocap.bo',
  googleForms: {
    // Completar cuando exista el Google Form definitivo.
    // Puedes usar solo formId o actionUrl directo.
    formId: '',
    actionUrl: '',
    submitTarget: 'contact-form-google-forms-target',
    fields: {
      name: '',
      organization: '',
      email: '',
      topic: '',
      message: ''
    },
    hiddenFields: []
  }
}

export const defaultContactFieldNames = {
  name: 'name',
  organization: 'organization',
  email: 'email',
  topic: 'topic',
  message: 'message'
}

export const getGoogleFormsActionUrl = (config = contactFormConfig.googleForms) => {
  if (config.actionUrl) return config.actionUrl
  if (config.formId) {
    return `https://docs.google.com/forms/d/e/${config.formId}/formResponse`
  }

  return ''
}

export const isGoogleFormsConfigured = (config = contactFormConfig.googleForms) => {
  const actionUrl = getGoogleFormsActionUrl(config)
  const fields = Object.values(config.fields || {})

  return Boolean(actionUrl) && fields.every(Boolean)
}
