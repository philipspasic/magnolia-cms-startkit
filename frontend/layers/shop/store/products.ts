import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: undefined
    })
});
