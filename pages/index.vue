<template>
  <Navigation />
  <BackToTop />

  <!-- ===================== HERO ===================== -->
  <header class="hero">
    <div
      class="hero__text"
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 700 } }"
    >
      <span class="hero__badge">
        <span class="hero__dot"></span> Available for new opportunities
      </span>
      <p class="eyebrow">QA Engineer · Web Developer</p>
      <h1 class="hero__name">
        Hi, I'm <span class="gradient-text">Leon Baćani</span>
      </h1>
      <p class="hero__lead">
        I'm a Computer Engineering graduate (bacc. ing. comp.) currently working as a
        <strong>QA Engineer at ReversingLabs</strong> in Zagreb — and building web
        experiences with Vue &amp; Nuxt on the side. I care about quality, clean code,
        and shipping things that just work.
      </p>

      <div class="hero__actions">
        <NuxtLink to="/my-experience" class="btn btn--primary">View my work</NuxtLink>
        <NuxtLink to="/contact" class="btn btn--ghost">Get in touch</NuxtLink>
      </div>

      <ul class="hero__social">
        <li v-for="link in socials" :key="link.label">
          <a :href="link.url" target="_blank" rel="noopener" :aria-label="link.label">
            <img :src="link.icon" :alt="link.label" />
          </a>
        </li>
      </ul>
    </div>

    <div
      class="hero__media"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { duration: 700, delay: 150 } }"
    >
      <div class="hero__glow"></div>
      <div class="hero__card glass">
        <Swiper
          :modules="[Pagination, Autoplay, EffectFlip]"
          effect="flip"
          :loop="true"
          :grab-cursor="true"
          :flip-effect="{ slideShadows: true }"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 2600, disableOnInteraction: true }"
        >
          <SwiperSlide v-for="photo in photos" :key="photo.url">
            <img class="hero__photo" :src="photo.url" alt="Leon Baćani" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </header>

  <!-- ===================== STATS ===================== -->
  <section class="section stats">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="stats__item glass"
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
    >
      <span class="stats__num gradient-text">{{ stat.num }}</span>
      <span class="stats__label">{{ stat.label }}</span>
    </div>
  </section>

  <!-- ===================== TECH STACK ===================== -->
  <section class="section">
    <p class="eyebrow">What I work with</p>
    <h2 class="section-title">My toolbox</h2>
    <p class="section-sub">
      A mix of QA automation and front-end development tools I use day to day.
    </p>

    <div class="stack">
      <div
        v-for="(group, i) in stack"
        :key="group.title"
        class="stack__group glass"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
      >
        <h3 class="stack__title">{{ group.title }}</h3>
        <ul class="stack__tags">
          <li v-for="tag in group.items" :key="tag">{{ tag }}</li>
        </ul>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFlip } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'

const photos = [
  { url: '/resources/images/ja1.jpeg' },
  { url: '/resources/images/ja2.jpeg' },
  { url: '/resources/images/ja3.jpeg' },
]

const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/leon-baćani-b390ba20a/', icon: '/resources/images/linkedin.png' },
  { label: 'GitHub', url: 'https://github.com/BacaniLeon', icon: '/resources/images/github.png' },
  { label: 'Instagram', url: 'https://www.instagram.com/leon.bacani_leli', icon: '/resources/images/instagram.png' },
]

const stats = [
  { num: '3+', label: 'Years of work experience' },
  { num: 'bacc.', label: 'Computer Engineering, TVZ' },
  { num: 'QA', label: 'Engineer @ ReversingLabs' },
  { num: '∞', label: 'Curiosity to keep learning' },
]

const stack = [
  { title: 'QA & Automation', items: ['Selenium (Python)', 'Jenkins', 'Jira', 'TestRail', 'Manual testing'] },
  { title: 'Front-end', items: ['Vue 3', 'Nuxt', 'JavaScript', 'TypeScript', 'SCSS / Sass'] },
  { title: 'Languages', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Excel', 'Outlook'] },
]
</script>
