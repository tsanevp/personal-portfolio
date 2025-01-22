import { defineStore } from 'pinia'
import type { Api } from '~/types/api';

export const useEducationStore = defineStore('education', {
  state: () => ({
    education: [] as Api.Education[],
  }),
  actions: {
    setEducation(educations: Api.Education[]) {
      this.education = educations;
    },
  },
  getters: {
    getEducation: (state) => state.education,
  },
});