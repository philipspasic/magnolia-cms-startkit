// import fetch from "node-fetch";

export default defineNuxtConfig({
  extends: [
    "./"
  ],

  runtimeConfig: {
    public: {
      MGNL_HOST: process.env.MGNL_HOST,
      MGNL_API_PAGES: process.env.MGNL_API_PAGES,
      MGNL_API_TEMPLATES: process.env.MGNL_API_TEMPLATES,
      NUXT_APP_MGNL_SITE: process.env.NUXT_APP_MGNL_SITE,
      NUXT_APP_MGNL_LANGUAGES: process.env.NUXT_APP_MGNL_LANGUAGES,
    },
  },

  build: {
    transpile: [
      "@magnolia/vue-editor",
      "@magnolia/template-annotations"
    ]
  },

  alias: {
    "@magnolia/vue-editor": "@magnolia/vue-editor/src/main.js",
    "@magnolia/template-annotations": "@magnolia/template-annotations/src/index.js",
  },

  // Fetch all paths and generate pages (needed for SSG option: npm run generate)
  // hooks: {
  //   async "nitro:config"(nitroConfig) {
  //     if (nitroConfig.dev) {
  //       return;
  //     }
  //     const results = await fetch(process.env.MGNL_API_PAGES)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         return res?.results?.map((node) => {
  //           if (node["mgnl:template"].startsWith("app-lm")) {
  //             return node["@path"];
  //           }
  //         });
  //       })
  //       .then((path) => path.filter((element) => element !== undefined));
  //     results.forEach((element) => nitroConfig?.prerender?.routes?.push(element));
  //   },
  // }
});
