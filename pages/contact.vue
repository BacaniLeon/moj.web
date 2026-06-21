<template>
  <Navigation />
  <BackToTop />

  <section class="section contact">
    <div
      class="contact__intro"
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
    >
      <p class="eyebrow">Let's talk</p>
      <h1 class="section-title">Get in <span class="gradient-text">touch</span></h1>
      <p class="section-sub">
        Have a project, an opportunity, or just want to say hi? Drop me a message and
        I'll get back to you as soon as I can.
      </p>

      <ul class="contact__links">
        <li>
          <a href="mailto:leonbaani@gmail.com">
            <img src="/resources/images/email.png" alt="Email" /> leonbaani@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/leon-baćani-b390ba20a/" target="_blank" rel="noopener">
            <img src="/resources/images/linkedin.png" alt="LinkedIn" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/BacaniLeon" target="_blank" rel="noopener">
            <img src="/resources/images/github.png" alt="GitHub" /> GitHub
          </a>
        </li>
      </ul>
    </div>

    <form
      class="contact__form glass"
      @submit.prevent="submitForm"
      v-motion
      :initial="{ opacity: 0, x: 40 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 120 } }"
    >
      <div class="contact__row">
        <div class="field">
          <label>First name</label>
          <input type="text" v-model="firstName" placeholder="Leon" required autocomplete="off" />
        </div>
        <div class="field">
          <label>Last name</label>
          <input type="text" v-model="lastName" placeholder="Baćani" required autocomplete="off" />
        </div>
      </div>

      <div class="contact__row">
        <div class="field">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="you@email.com" required autocomplete="off" />
        </div>
        <div class="field">
          <label>Phone</label>
          <input type="text" v-model="phone" placeholder="+385 ..." required autocomplete="off" />
        </div>
      </div>

      <div class="field">
        <label>Message</label>
        <textarea rows="5" v-model="message" placeholder="Tell me a bit about it..." required maxlength="424"></textarea>
      </div>

      <button class="btn btn--primary contact__submit" type="submit" :disabled="loading">
        {{ loading ? 'Sending…' : 'Send message' }}
      </button>

      <p v-if="status" :class="['contact__status', success ? 'is-ok' : 'is-err']">{{ status }}</p>
    </form>
  </section>

  <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const WEB3FORMS_ACCESS_KEY = '0ef53230-3ec9-4b73-8040-ebf4d198cde8'
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const loading = ref(false)
const status = ref('')
const success = ref(false)

const submitForm = async () => {
  loading.value = true
  status.value = ''
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      }),
    })
    const result = await response.json()
    if (result.success) {
      success.value = true
      status.value = 'Thanks! Your message has been sent.'
      firstName.value = lastName.value = email.value = phone.value = message.value = ''
    } else {
      success.value = false
      status.value = 'Something went wrong. Please try again.'
    }
  } catch {
    success.value = false
    status.value = 'Network error. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>
