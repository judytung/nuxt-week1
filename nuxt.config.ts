// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
  // modules: ["nuxt-swiper"],
  "components": {
   "dirs": [
     {
         "path": "~/components/global",
         "global": true
     }
   ],
  },
  runtimeConfig: {
    public: {
      NUXT_APP_BASE_URL: process.env.NUXT_APP_BASE_URL,
    },
  }

})