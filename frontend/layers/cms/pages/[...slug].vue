<template>
  <EditablePage
    v-if="content"
    :content="content"
    :config="config"
    :templateAnnotations="templateAnnotations"
  />
</template>

<script>
import { EditablePage } from "@magnolia/vue-editor";
import { useAppStore } from "@/store/app";
import { usePagesStore } from "@/store/pages";
import config from "@/config/magnolia.config";

function getCurrentLanguage(url, languages) {
  return languages.find(language => url.indexOf("/" + language) > -1) || languages[0];
}

function setURLSearchParams(url, param) {
  return url + (url.indexOf("?") > -1 ? "&" : "?") + param;
}

export default {
  name: "Page",

  components: {
    EditablePage,
  },

  data() {
    return {
      content: null,
      templateAnnotations: {},
      config,
    };
  },

  async setup() {
    const runtimeConfig = useRuntimeConfig();
    const fullPath = useRoute().fullPath?.split('?')[0];
    const appStore = useAppStore();
    const pagesStore = usePagesStore();
    const i18n = useI18n({ useScope: "global" });

    // Load paths, see .env and nuxt.config.js files
    const nodeName = "/" + runtimeConfig.public.NUXT_APP_MGNL_SITE;
    const pagesApi = runtimeConfig.public.MGNL_API_PAGES;
    const templateAnnotationsApi = runtimeConfig.public.MGNL_API_TEMPLATES;

    const currentLanguage = getCurrentLanguage(fullPath, i18n.availableLocales);
    const isDefaultLanguage = currentLanguage === i18n.availableLocales[0];
    let pagePath = nodeName + fullPath.replace(new RegExp(".*" + nodeName), "");
    let content;

    try {
      content = await useAsyncData(fullPath, async () => {
        // Get header and footer from index page
        if(fullPath !== "/" && !pagesStore.sharedComponents) {
          let path = nodeName + "/";
          if (!isDefaultLanguage) {
            path = path.replace("/" + currentLanguage, "");
          }
          const indexPage = await $fetch(
            setURLSearchParams(pagesApi + path, "lang=" + currentLanguage)
          );

          pagesStore.$patch({sharedComponents: {
            header: indexPage.header,
            footer: indexPage.footer
          }});
        }

        if (!isDefaultLanguage) {
          pagePath = pagePath.replace("/" + currentLanguage, "");
        }

        return $fetch(
          setURLSearchParams(pagesApi + pagePath, "lang=" + currentLanguage)
        );
      });

      content = content.data;

      if(!content.value) {
        throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    } catch (error) {
      throw createError(error);
    }

    console.log(appStore.loaded)

    return { content, pagePath, templateAnnotationsApi };
  },

  async mounted() {
    if (window.location.search.includes("mgnlPreview")) {
      const templateAnnotationsRes = await fetch(
        this.templateAnnotationsApi + this.pagePath
      );
      this.templateAnnotations = await templateAnnotationsRes.json();
    }
  }
};
</script>
