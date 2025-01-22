import { defineStore } from 'pinia'
import type { Api } from '~/types/api';

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [] as Api.Experience[],
  }),
  actions: {
    setExperiences(experiences: Api.Experience[]) {
      this.experiences = experiences;
    },
  },
  getters: {
    getExperiences: (state) => state.experiences,
    getLength: (state) => state.experiences.length
  },
});