<template>
  <div id="section-projects" class="mb-5 mt-8">
    <div class="flex justify-between mb-5">
      <h1>Projects</h1>
    </div>
    <div id="list-experiences">
      <ProjectCard
        v-for="project in projects.values()"
        :key="project.projectName"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Api } from "~/types/api";

const projects = ref<Api.Project[]>([]);

onMounted(async () => {
  try {
    const projectsResponse = await $fetch<Api.ApiResponse<Api.Project>>("/api/projects");
    if (projectsResponse.success) {
      projects.value = projectsResponse.data;
    } else {
      console.error("Error fetching projects:", projectsResponse.error);
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
});
</script>
