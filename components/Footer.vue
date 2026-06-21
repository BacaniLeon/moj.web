<template>
  <footer class="siteFooter">
    <div class="siteFooter__inner">
      <div class="siteFooter__top">
        <div class="siteFooter__brand">
          <span class="siteFooter__mark">LB</span>
          <div>
            <p class="siteFooter__name">Leon Baćani</p>
            <p class="siteFooter__role">QA Engineer · Web Developer</p>
          </div>
        </div>

        <ul class="siteFooter__social">
          <li v-for="link in socials" :key="link.label">
            <a :href="link.url" target="_blank" rel="noopener" :aria-label="link.label">
              <img :src="link.icon" :alt="link.label" />
            </a>
          </li>
        </ul>
      </div>

      <div class="siteFooter__bottom">
        <p>© {{ year }} Leon Baćani — Built with Nuxt &amp; Vue.</p>
        <NuxtLink to="/contact">Let's work together →</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/leon-baćani-b390ba20a/', icon: '/resources/images/linkedin.png' },
  { label: 'GitHub', url: 'https://github.com/BacaniLeon', icon: '/resources/images/github.png' },
  { label: 'Instagram', url: 'https://www.instagram.com/leon.bacani_leli', icon: '/resources/images/instagram.png' },
  { label: 'Facebook', url: 'https://www.facebook.com/Lelihue', icon: '/resources/images/facebook.png' },
]
</script>
