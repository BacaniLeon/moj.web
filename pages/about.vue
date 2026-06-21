<template>
  <Navigation />
  <BackToTop />

  <section class="section aboutHead">
    <p class="eyebrow">Get to know me</p>
    <h1 class="section-title">A few things about <span class="gradient-text">me</span></h1>
    <p class="section-sub">
      Beyond the code and test cases — here's what shapes who I am.
    </p>
  </section>

  <section class="section aboutGrid">
    <article
      v-for="(fact, i) in facts"
      :key="fact.title"
      :class="['aboutCard glass', { 'aboutCard--wide': fact.wide }]"
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18, delay: i * 60 } }"
    >
      <div class="aboutCard__media">
        <img :src="fact.photo" :alt="fact.title" />
      </div>
      <div class="aboutCard__body">
        <span class="aboutCard__icon">{{ fact.icon }}</span>
        <h2 class="aboutCard__title">{{ fact.title }}</h2>
        <p>{{ fact.paragraf }}</p>
      </div>
    </article>
  </section>

  <Footer />
</template>

<script setup>
const facts = [
  {
    icon: '🎓',
    title: 'Education',
    wide: true,
    paragraf:
      "My journey began at OŠ Voltino, then Tehnička Škola Zagreb, where I built a game called 'Parkour' in Unity for my graduation project. From there I went on to TVZ (Zagreb University of Applied Sciences), earning my Bachelor's degree in Computer Engineering (bacc. ing. comp.).",
    photo: '/resources/images/tvz.svg',
  },
  {
    icon: '🏀',
    title: 'Sports',
    paragraf:
      'I tried football, badminton and taekwondo growing up, but basketball won me over. I trained for six years and I\'m a passionate NBA fan — Dallas Mavericks all the way, with Luka Dončić as my favorite player.',
    photo: '/resources/images/lukadoncic.jpg',
  },
  {
    icon: '🐾',
    title: 'Animals',
    paragraf:
      'I\'ve always loved animals. As a kid I had a pet rabbit, and later my family welcomed two dogs, Bono and Boki. Every animal has a place in my heart, but dogs are truly the best companions.',
    photo: '/resources/images/bokibono.jpeg',
  },
  {
    icon: '🎵',
    title: 'Hobbies',
    wide: true,
    paragraf:
      'In my free time you\'ll find me catching up with friends over long coffees, watching a good series, or playing basketball — pickup games on the schoolground and a rented gym every Sunday. I listen to all kinds of music; right now Måneskin is my favorite, and seeing them live was unforgettable.',
    photo: '/resources/images/maneskin.jpeg',
  },
]
</script>
