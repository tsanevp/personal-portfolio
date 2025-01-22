import { defineStore } from 'pinia'
import type { Api } from '~/types/api';

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [] as Api.Project[],
  }),
  actions: {
    setProjects(projects: Api.Project[]) {
      this.projects = projects;
    },
  },
  getters: {
    getProjects: (state) => state.projects,
  },
});