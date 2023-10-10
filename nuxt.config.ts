// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/global.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
