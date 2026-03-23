import { computed, ref } from 'vue'
import {
  CONTACT_FORM_PROVIDERS,
  contactFormConfig,
  defaultContactFieldNames,
  getGoogleFormsActionUrl,
  isGoogleFormsConfigured
} from '../config/contactForm.js'

const normalizeTopicForGoogleForms = topic => {
  if (topic === 'Membresía') return 'Membresia'
  return topic
}

export const useContactSubmission = recipientEmail => {
  const submissionState = ref('idle')
  const feedbackTitle = ref('')
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

  const resetFeedback = () => {
    if (submissionState.value !== 'idle' || feedbackTitle.value || feedbackMessage.value) {
      submissionState.value = 'idle'
      feedbackTitle.value = ''
      feedbackMessage.value = ''
    }
  }

  const submitForm = async form => {
    submissionState.value = 'submitting'
    feedbackTitle.value = ''
    feedbackMessage.value = ''

    if (provider.value === CONTACT_FORM_PROVIDERS.GOOGLE_FORMS) {
      const formData = new URLSearchParams()

      formData.append(fieldNames.value.name, form.name)
      formData.append(fieldNames.value.organization, form.organization)
      formData.append(fieldNames.value.email, form.email)
      formData.append(fieldNames.value.topic, normalizeTopicForGoogleForms(form.topic))
      formData.append(fieldNames.value.message, form.message)

      for (const field of hiddenFields.value) {
        formData.append(field.name, field.value)
      }

      try {
        await fetch(getGoogleFormsActionUrl(contactFormConfig.googleForms), {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formData.toString()
        })
        submissionState.value = 'success'
        feedbackTitle.value = 'Mensaje enviado correctamente'
        feedbackMessage.value = 'Gracias por escribirnos. El equipo de BOCAP revisará tu consulta y te responderá pronto.'
        return true
      } catch {
        submissionState.value = 'error'
        feedbackTitle.value = 'No pudimos enviar tu mensaje'
        feedbackMessage.value = 'Intenta nuevamente en unos minutos. Si el problema continúa, puedes escribir a bocapbolivia@gmail.com.'
        return false
      }
    }

    submissionState.value = 'error'
    feedbackTitle.value = 'Formulario no disponible'
    feedbackMessage.value = `Por ahora puedes contactarnos directamente en ${recipientEmail || contactFormConfig.recipientEmail}.`
    return false
  }

  return {
    feedbackTitle,
    feedbackMessage,
    fieldNames,
    hiddenFields,
    isError: computed(() => submissionState.value === 'error'),
    isSubmitting: computed(() => submissionState.value === 'submitting'),
    isSuccessful: computed(() => submissionState.value === 'success'),
    provider,
    resetFeedback,
    submitForm
  }
}
