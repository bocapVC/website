<template>
  <form
    class="contact-form"
    :action="formAttributes.action"
    :method="formAttributes.method"
    :target="formAttributes.target"
    @submit.prevent="handleSubmit"
  >
    <iframe
      v-if="usesIframeTransport"
      :name="formAttributes.target"
      class="contact-form__transport"
      title="Transporte de formulario"
      tabindex="-1"
      aria-hidden="true"
    ></iframe>

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
        <input v-model.trim="form.name" type="text" :name="fieldNames.name" autocomplete="name" required>
      </label>

      <label class="form-field">
        <span>Organización</span>
        <input v-model.trim="form.organization" type="text" :name="fieldNames.organization" autocomplete="organization">
      </label>

      <label class="form-field">
        <span>Email</span>
        <input v-model.trim="form.email" type="email" :name="fieldNames.email" autocomplete="email" required>
      </label>

      <label class="form-field">
        <span>Tema</span>
        <select v-model="form.topic" :name="fieldNames.topic" required>
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
      ></textarea>
    </label>

    <div class="form-actions">
      <button class="btn btn-primary" type="submit" :disabled="isSubmitting">{{ submitLabel }}</button>
      <p v-if="isSuccessful" class="form-feedback">
        {{ feedbackMessage }}
      </p>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
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

const {
  feedbackMessage,
  fieldNames,
  formAttributes,
  hiddenFields,
  isSubmitting,
  isSuccessful,
  submitForm,
  usesIframeTransport
} = useContactSubmission(props.email)

const handleSubmit = event => {
  submitForm(event, form)
}
</script>
