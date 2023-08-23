// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/scss/main.scss', '@/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],

  ssr: true,
  vite: {
    css:{
      devSourcemap: true,
    }
  },
  tailwindcss: {
    cssPath: false,
    configPath: 'tailwind.config.js',

    config: {},

  },
  build: {

  }


})
