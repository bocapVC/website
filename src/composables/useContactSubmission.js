import { computed, ref } from 'vue'
import {
  CONTACT_FORM_PROVIDERS,
  contactFormConfig,
  defaultContactFieldNames,
  getGoogleFormsActionUrl,
  isGoogleFormsConfigured
} from '../config/contactForm.js'

const buildMailtoMessage = (recipientEmail, form) => {
  const subject = `[BOCAP] ${form.topic} · ${form.name}`
  const body = [
    `Nombre: ${form.name}`,
    `Organizacion: ${form.organization || 'No especificada'}`,
    `Email: ${form.email}`,
    `Tema: ${form.topic}`,
    '',
    form.message
  ].join('\n')

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const useContactSubmission = recipientEmail => {
  const submissionState = ref('idle')
  const feedbackMessage = ref('')

  const googleFormsEnabled = computed(() => {
    return contactFormConfig.provider === CONTACT_FORM_PROVIDERS.GOOGLE_FORMS
      && isGoogleFormsConfigured(contactFormConfig.googleForms)
  })

  const provider = computed(() => {
    return googleFormsEnabled.value
      ? CONTACT_FORM_PROVIDERS.GOOGLE_FORMS
      : CONTACT_FORM_PROVIDERS.MAILTO
  })

  const formAttributes = computed(() => {
    if (provider.value !== CONTACT_FORM_PROVIDERS.GOOGLE_FORMS) {
      return {
        action: undefined,
        method: undefined,
        target: undefined
      }
    }

    return {
      action: getGoogleFormsActionUrl(contactFormConfig.googleForms),
      method: 'POST',
      target: contactFormConfig.googleForms.submitTarget
    }
  })

  const fieldNames = computed(() => {
    return provider.value === CONTACT_FORM_PROVIDERS.GOOGLE_FORMS
      ? contactFormConfig.googleForms.fields
      : defaultContactFieldNames
  })

  const hiddenFields = computed(() => {
    return provider.value === CONTACT_FORM_PROVIDERS.GOOGLE_FORMS
      ? contactFormConfig.googleForms.hiddenFields
      : []
  })

  const submitForm = (event, form) => {
    submissionState.value = 'submitting'

    if (provider.value === CONTACT_FORM_PROVIDERS.GOOGLE_FORMS) {
      event.target.submit()
      submissionState.value = 'success'
      feedbackMessage.value = 'Mensaje enviado. El equipo de BOCAP lo revisara en breve.'
      return
    }

    window.location.href = buildMailtoMessage(
      recipientEmail || contactFormConfig.recipientEmail,
      form
    )
    submissionState.value = 'success'
    feedbackMessage.value = `Se abrio tu cliente de correo con el mensaje prellenado para ${recipientEmail}.`
  }

  return {
    feedbackMessage,
    fieldNames,
    formAttributes,
    hiddenFields,
    isSubmitting: computed(() => submissionState.value === 'submitting'),
    isSuccessful: computed(() => submissionState.value === 'success'),
    provider,
    usesIframeTransport: computed(() => provider.value === CONTACT_FORM_PROVIDERS.GOOGLE_FORMS)
  }
}
