//Nuxt config page: https://v3.nuxtjs.org/api/configuration/nuxt.config
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  extends: [
    "./"
  ],

  // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: [
    "./assets/css/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
    "vuetify/lib/styles/main.sass"
  ],

  // Transpiling libraries: https://v3.nuxtjs.org/guide/going-further/esm#transpiling-libraries
  build: {
    transpile: [
      "vuetify"
    ]
  },

  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt"
  ],

  // import: {
  //   dirs: [
  //     resolve("../../store/**"),
  //     resolve("*/store/**"),
  //   ]
  // },

  i18n: {
    lazy: true,
    langDir: './assets/translations',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'de',
        iso: 'de',
        name: 'German',
        file: 'de.json',
      }
    ],
    defaultLocale: 'en'
  }
});
