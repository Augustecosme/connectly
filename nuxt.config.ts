// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  extends : ['@nuxt/ui-pro'] ,

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-feather-icons',
    '@nuxt/content'
  ]
})