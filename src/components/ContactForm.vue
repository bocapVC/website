<template>
  <form
    class="contact-form"
    @submit.prevent="handleSubmit"
  >
    <input
      v-for="field in hiddenFields"
      :key="field.name"
      type="hidden"
      :name="field.name"
      :value="field.value"
    >

    <div class="form-grid">
      <label class="form-field">
        <span>Nombre</span>
        <input v-model.trim="form.name" type="text" :name="fieldNames.name" autocomplete="name" required @input="resetFeedback">
      </label>

      <label class="form-field">
        <span>Organización</span>
        <input v-model.trim="form.organization" type="text" :name="fieldNames.organization" autocomplete="organization" @input="resetFeedback">
      </label>

      <label class="form-field">
        <span>Email</span>
        <input v-model.trim="form.email" type="email" :name="fieldNames.email" autocomplete="email" required @input="resetFeedback">
      </label>

      <label class="form-field">
        <span>Tema</span>
        <select v-model="form.topic" :name="fieldNames.topic" required @change="resetFeedback">
          <option disabled value="">Selecciona una opción</option>
          <option v-for="topic in topics" :key="topic" :value="topic">{{ topic }}</option>
        </select>
      </label>
    </div>

    <label class="form-field">
      <span>Mensaje</span>
      <textarea
        v-model.trim="form.message"
        :name="fieldNames.message"
        rows="6"
        :placeholder="placeholder"
        required
        @input="resetFeedback"
      ></textarea>
    </label>

    <div class="form-actions">
      <button class="btn btn-primary" type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Enviando...' : submitLabel }}
      </button>
      <div
        v-if="isSuccessful || isError"
        ref="feedbackRef"
        class="form-feedback"
        :class="{
          'form-feedback--success': isSuccessful,
          'form-feedback--error': isError
        }"
        :role="isError ? 'alert' : 'status'"
        :aria-live="isError ? 'assertive' : 'polite'"
        tabindex="-1"
      >
        <div class="form-feedback__icon" aria-hidden="true">
          {{ isError ? '!' : 'OK' }}
        </div>
        <div class="form-feedback__content">
          <strong>{{ feedbackTitle }}</strong>
          <p>{{ feedbackMessage }}</p>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { nextTick, reactive, ref } from 'vue'
import { useContactSubmission } from '../composables/useContactSubmission.js'

const props = defineProps({
  email: {
    type: String,
    required: true
  },
  topics: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: 'Cuéntanos qué buscas construir con BOCAP.'
  },
  submitLabel: {
    type: String,
    default: 'Enviar mensaje'
  }
})

const form = reactive({
  name: '',
  organization: '',
  email: '',
  topic: '',
  message: ''
})

const feedbackRef = ref(null)

const {
  feedbackTitle,
  feedbackMessage,
  fieldNames,
  hiddenFields,
  isError,
  isSubmitting,
  isSuccessful,
  resetFeedback,
  submitForm
} = useContactSubmission(props.email)

const resetForm = () => {
  form.name = ''
  form.organization = ''
  form.email = ''
  form.topic = ''
  form.message = ''
}

const handleSubmit = async () => {
  const wasSuccessful = await submitForm(form)

  if (wasSuccessful) {
    resetForm()
  }

  await nextTick()
  feedbackRef.value?.focus()
}
</script>
