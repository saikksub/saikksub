import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    link: [
      { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/tailwind.css'
  ],
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: ['@heroicons/vue'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
})
