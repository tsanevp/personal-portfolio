import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
  state: () => ({
    lightMode: false,
  }),
  actions: {
    setLightMode() {
      this.lightMode = !this.lightMode;
    },
  },
  getters: {
    getLightMode: (state) => state.lightMode,
  },
});
