// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-primevue',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: true,
    },
  },
  runtimeConfig: {
    baseUrl: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  ssr: false,
  primevue: {
    components: {
      prefix: 'Prime',
      // what components to exclude
      exclude: ["Editor", "Chart"]
    }
  },
  css: ["primevue/resources/themes/lara-light-green/theme.css"],
  devtools: { enabled: true }
})
