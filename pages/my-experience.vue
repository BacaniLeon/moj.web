<template>
  <Navigation />
  <BackToTop />

  <section class="section expHead">
    <p class="eyebrow">Career so far</p>
    <h1 class="section-title">Experience &amp; <span class="gradient-text">milestones</span></h1>
    <p class="section-sub">
      From logistics operations to front-end internships to quality engineering —
      every step taught me something I still use today.
    </p>
  </section>

  <!-- ===================== TIMELINE ===================== -->
  <section class="section timeline">
    <article
      v-for="(exp, i) in experience"
      :key="exp.place"
      class="timeline__item"
      v-motion
      :initial="{ opacity: 0, x: -40 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 600, delay: i * 80 } }"
    >
      <div class="timeline__marker">
        <span class="timeline__dot"></span>
      </div>
      <div class="timeline__card glass">
        <div class="timeline__top">
          <div>
            <h2 class="timeline__role">{{ exp.job }}</h2>
            <p class="timeline__place gradient-text">{{ exp.place }}</p>
          </div>
          <span class="timeline__date">{{ exp.duration }}</span>
        </div>
        <p class="timeline__desc">{{ exp.description }}</p>
        <ul class="timeline__tags">
          <li v-for="tag in exp.tags" :key="tag">{{ tag }}</li>
        </ul>
      </div>
    </article>
  </section>

  <!-- ===================== CERTIFICATES (placeholder) ===================== -->
  <section class="section">
    <p class="eyebrow">Credentials</p>
    <h2 class="section-title">Certificates &amp; <span class="gradient-text">courses</span></h2>
    <p class="section-sub">
      <!-- TODO: Replace these example certificates with the real ones from your LinkedIn
           (name, issuer, date, and optional credential link). -->
      A growing collection of certifications and completed courses.
    </p>

    <div class="certs">
      <article
        v-for="(cert, i) in certificates"
        :key="cert.title"
        class="certCard glass"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 70 } }"
      >
        <div class="certCard__badge">🏅</div>
        <div class="certCard__body">
          <h3 class="certCard__title">{{ cert.title }}</h3>
          <p class="certCard__issuer">{{ cert.issuer }}</p>
          <span class="certCard__date">{{ cert.date }}</span>
        </div>
        <a v-if="cert.url" :href="cert.url" target="_blank" rel="noopener" class="certCard__link">View →</a>
      </article>
    </div>
  </section>

  <Footer />
</template>

<script setup>
const experience = [
  {
    job: 'QA Engineer',
    place: 'ReversingLabs',
    duration: 'Mar 2025 — Present',
    description:
      'Skilled in both manual and automated testing with expertise in Selenium (Python), Jenkins, Jira, and TestRail. I actively contribute to daily team meetings to discuss improvements, perform feature testing, and maintain test coverage by updating and rewriting outdated test cases.',
    tags: ['Selenium', 'Python', 'Jenkins', 'Jira', 'TestRail'],
  },
  {
    job: 'Frontend Intern',
    place: 'SHAPE 404',
    duration: 'Mar 2024',
    description:
      'During my internship at SHAPE 404 I worked on real-life projects in a Vue.js environment. Through hands-on experience I sharpened my Vue 3 and Nuxt skills, completing assignments within deadlines and gaining valuable insight into professional projects in a dynamic environment.',
    tags: ['Vue 3', 'Nuxt', 'JavaScript', 'SCSS'],
  },
  {
    job: 'Operations Agent',
    place: 'DHL Express Croatia',
    duration: 'Jun 2019 — Sep 2023',
    description:
      'Across college summers and full-time stretches I gained broad operational experience at DHL — as a courier ensuring safe, timely deliveries; in warehouse operations sorting third-party packages for partners like Hrvatska Pošta, Overseas Express and BoxNow; and as an export agent building ULDs and preparing air shipments. I also strengthened my Excel, Word and Outlook skills to optimize workflows and accuracy.',
    tags: ['Operations', 'Logistics', 'Excel', 'Teamwork'],
  },
]

// TODO: Replace these placeholder entries with your real LinkedIn certificates.
const certificates = [
  { title: 'Certificate name', issuer: 'Issuing organization', date: '2024', url: '' },
  { title: 'Certificate name', issuer: 'Issuing organization', date: '2024', url: '' },
  { title: 'Certificate name', issuer: 'Issuing organization', date: '2023', url: '' },
]
</script>
