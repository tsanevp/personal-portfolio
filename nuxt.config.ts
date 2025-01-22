export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/img/favicon-32x32.png', sizes: '32x32' },
      ],
    },
  },
  ui: {
    safelistColors: ['customGrey', 'customBlue', 'customGreen']
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@pinia/nuxt', '@nuxt/ui', 'vue3-carousel-nuxt'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    configPath: './tailwind.config.js',
  },
  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
})