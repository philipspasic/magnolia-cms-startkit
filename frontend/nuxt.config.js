import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  import: {
    dirs: [
      resolve("store/**"),
      resolve("layers/*/store/**")
    ]
  }
});
