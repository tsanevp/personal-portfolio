<template>
  <Analytics />
  <SpeedInsights />
  <NuxtLayout name="default" />
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import type { Api } from "~/types/api";

const experienceStore = useExperienceStore();
const projectStore = useProjectStore();
const stackStore = useStackStore();
const educationStore = useEducationStore();

onServerPrefetch(async () => {
    try {
    const experiencesResponse = await $fetch<Api.ApiResponse<Api.Experience>>(
      "/api/experiences"
    );
    const educationResponse = await $fetch<Api.ApiResponse<Api.Education>>(
      "/api/education"
    );
    const projectsResponse = await $fetch<Api.ApiResponse<Api.Project>>(
      "/api/projects"
    );
    const stackResponse = await $fetch<Api.ApiResponse<Api.Stack>>("/api/stack");
    if (
      experiencesResponse.success &&
      educationResponse &&
      projectsResponse.success &&
      stackResponse.success
    ) {
      experienceStore.setExperiences(experiencesResponse.data);
      projectStore.setProjects(projectsResponse.data);
      stackStore.setStack(stackResponse.data);
      educationStore.setEducation(educationResponse.data);
    } else {
      console.error(
        "Error fetching experiences, education, projects, or stack:",
        experiencesResponse.error,
        educationResponse.error,
        projectsResponse.error,
        stackResponse.error
      );
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
});
</script>
