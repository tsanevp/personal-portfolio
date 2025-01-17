import { defineStore } from 'pinia'

interface Stack {
  name: string;
  label: string;
}

interface Project {
  _id: string;
  projectName: string;
  projectDescription: string;
  projectImageLink: string;
  stack: Stack[];
}

interface ProjectResponse {
  success: boolean;
  data: Project[];
  error?: string;
}

export const useProjectStore = defineStore('project', {
  state: () => ({
    projects: [] as Project[],
  }),
  actions: {
    async fetchProjectsFromDb() {
      try {
        const projectsResponse = await $fetch<ProjectResponse>("/api/projects");

        if (projectsResponse.success) {
          this.setProjects(projectsResponse.data);
        } else {
          console.error(
            "Error fetching projects:",
            projectsResponse.error,
          );
        }
      } catch (err) {
        console.error("Request failed:", err);
      }
    },
    setProjects(projects: Project[]) {
      this.projects = projects;
    },
  },
  getters: {
    getProjects: (state) => state.projects,
  },
});