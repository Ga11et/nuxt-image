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
    disallow: '',
  },

  image: {
    domains: ['localhost'],
    alias: { old_back: 'http://localhost:80' },
  },

  compatibilityDate: '2024-10-04',
});
