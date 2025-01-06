// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: { 
    MONGODB_URI: process.env.MONGODB_URI,
  }
})