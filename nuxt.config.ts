export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },

  modules: ['@nuxtjs/robots', '@nuxt/image'],

  robots: {
    UserAgent: '*',
    Disallow: '',
  },

  image: {
    domains: ['new.shurik.market', 'shurik.market'],
    alias: { back: 'https://new.shurik.market', old_back: 'https://shurik.market' },
  },

  compatibilityDate: '2024-10-04',
});