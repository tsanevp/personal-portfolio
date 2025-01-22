<template>
  <div id="section-projects" class="mb-5 mt-8">
    <div id="project-section" v-for="(project, index) in projects.values()">
      <ProjectSection
        :key="project.projectName"
        :project="project"
        :class="index !== 0 ? 'mt-20' : ''"
      />

      <!-- <hr v-if="index !== projects.length - 1" class="half-border mt-10 mx-auto" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectSection from "~/components/Project/ProjectSection.vue";
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

onMounted(() => {
  const hash = window.location.hash; // Get the hash from the URL
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
});
</script>

<style scoped>
.half-border-div {
  text-align: center;
}

.half-border {
  width: 25%;
  border: none;
  border-bottom: 2px dashed var(--secondary-color-green);
}
</style>