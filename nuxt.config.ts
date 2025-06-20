// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  css: ["~/assets/css/main.css"],
  icon: {
    serverBundle: {
      collections: ["twemoji"],
    },
  },
});