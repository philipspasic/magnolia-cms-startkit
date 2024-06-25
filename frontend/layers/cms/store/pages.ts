import { defineStore } from "pinia";

export const usePagesStore = defineStore('pages', {
    state: () => ({
        sharedComponents: undefined
    })
});
