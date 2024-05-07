// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
    "@nuxt/eslint"
  ],
  content: {
    highlight: {
      theme: 'monokai'
    }
  },
})