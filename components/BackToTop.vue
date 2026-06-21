<template>
  <button
    :class="['backToTop', { 'backToTop--hidden': !show }]"
    aria-label="Back to top"
    @click="toTop"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 19V5" />
      <path d="m5 12 7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onScroll() {
  show.value = window.scrollY > 400
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
