<template>
  <nav :class="['navBar', { 'navBar--open': menuOpen, 'navBar--scrolled': scrolled }]">
    <div class="navBar__bar">
      <NuxtLink to="/" class="navBar__brand" @click="closeMenu">
        <span class="navBar__mark">LB</span>
        <span class="navBar__name">Leon Baćani</span>
      </NuxtLink>

      <button class="navBar__toggle" :aria-expanded="menuOpen" aria-label="Toggle menu" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <ul class="navBar__links">
      <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
      <li><NuxtLink to="/about" @click="closeMenu">About</NuxtLink></li>
      <li><NuxtLink to="/my-experience" @click="closeMenu">Experience</NuxtLink></li>
      <li><NuxtLink to="/contact" class="navBar__cta" @click="closeMenu">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const scrolled = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  document.documentElement.style.overflow = menuOpen.value ? 'hidden' : 'visible'
}

function closeMenu() {
  menuOpen.value = false
  document.documentElement.style.overflow = 'visible'
}

function onScroll() {
  scrolled.value = window.scrollY > 30
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
