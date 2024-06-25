<template>
    <h1>Product number {{ productNumber }}</h1>
</template>

<script>
// import { useStore } from "@/store";

export default {
    setup() {
        // const store = useStore();
        const productNumber = useRoute().params.product_number
        // console.log('store', store)
        return {productNumber}
    }
};
</script>
