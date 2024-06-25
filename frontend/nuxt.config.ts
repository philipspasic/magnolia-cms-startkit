export default defineNuxtConfig({
  extends: [
    "./layers/base",
    "./layers/cms",
    "./layers/shop",
    "./layers/bestchoice",
    "./layers/ace"
  ],

  // App configuration: https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      title: "Magnolia Nuxt3 Startkit",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    }
  }
});
