// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/styles.scss'],
  modules: ['@vueuse/motion/nuxt'],
  app: {
    head: {
      title: 'Leon Baćani — QA Engineer & Web Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Leon Baćani — QA Engineer at ReversingLabs and web developer building with Vue & Nuxt. Computer Engineering bacc. ing. comp. from TVZ Zagreb.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
