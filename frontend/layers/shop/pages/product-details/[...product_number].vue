<template>
    <h1>Product number {{ productNumber }}</h1>
</template>

<script>
import { useStore } from "@/store";

export default {
    setup() {
        // const appStore = useAppStore();
        const productNumber = useRoute().params.product_number
        console.log('store', useStore())
        return {productNumber}
    }
};
</script>
