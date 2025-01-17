import { defineStore } from 'pinia'

interface Experience {
  _id: string;
  jobTitle: string;
  duration: string;
  description: string;
  link: string;
  order: string;
}

interface ExperienceResponse {
  success: boolean;
  data: Experience[];
  error?: string;
}

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [] as Experience[],
  }),
  actions: {
    async fetchExperiencesFromDb() {
      try {
        const experiencesResponse = await $fetch<ExperienceResponse>("/api/experiences");
        if (experiencesResponse.success) {
          this.setExperiences(experiencesResponse.data);
        } else {
          console.error(
            "Error fetching experiences:",
            experiencesResponse.error,
          );
        }
      } catch (err) {
        console.error("Request failed:", err);
      }
    },
    setExperiences(experiences: Experience[]) {
      this.experiences = experiences;
    },
  },
  getters: {
    getExperiences: (state) => state.experiences,
    getLength: (state) => state.experiences.length
  },
});