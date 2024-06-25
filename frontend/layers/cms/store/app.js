import { defineStore } from "pinia";
import { useStore } from "@/store";
const store = useStore();
// console.log('hello', store)

const appStore = defineStore('app', {
  state: () => ({
    loaded: true
  })
});

store.$patch({app: appStore});
