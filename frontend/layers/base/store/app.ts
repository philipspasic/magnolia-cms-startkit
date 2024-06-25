import { defineStore } from "pinia";
// import { useStore } from "../../../store";

const appStore = {
  state: () => ({
    loaded: true
  })
};

// const store = useStore();
// store.app = defineStore('app', appStore)();

export const useAppStore = defineStore('app', appStore);
