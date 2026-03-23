export const CONTACT_FORM_PROVIDERS = {
  GOOGLE_FORMS: 'google-forms',
  MAILTO: 'mailto'
}

export const contactFormConfig = {
  provider: CONTACT_FORM_PROVIDERS.GOOGLE_FORMS,
  recipientEmail: 'contacto@bocap.bo',
  googleForms: {
    formId: '13L26lKRqN546lYPsPiMKdyISdAvInViVvXG83_ddpnA',
    actionUrl: 'https://docs.google.com/forms/d/13L26lKRqN546lYPsPiMKdyISdAvInViVvXG83_ddpnA/formResponse',
    fields: {
      name: 'entry.905177308',
      organization: 'entry.370367197',
      email: 'entry.313738678',
      topic: 'entry.1004391731',
      message: 'entry.2128493084'
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
    return `https://docs.google.com/forms/d/${config.formId}/formResponse`
  }

  return ''
}

export const isGoogleFormsConfigured = (config = contactFormConfig.googleForms) => {
  const actionUrl = getGoogleFormsActionUrl(config)
  const fields = Object.values(config.fields || {})

  return Boolean(actionUrl) && fields.every(Boolean)
}
