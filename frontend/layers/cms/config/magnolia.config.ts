// Pages
import Basic from "@/pageTemplates/Basic.vue";

// Components
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import Cover from "@/components/Cover.vue";
import TextAndImage from "@/components/TextAndImage.vue";
import TextContent from "@/components/TextContent.vue";

const config = {
    componentMappings: {
        // Pages
        "app-lm:pages/basic": Basic,
        "app-lm:pages/index": Basic,

        // Components
        "app-lm:components/header": PageHeader,
        "app-lm:components/footer": PageFooter,
        "app-lm:components/cover": Cover,
        "app-lm:components/text-and-image": TextAndImage,
        "app-lm:components/text-content": TextContent
    }
};

export default config;