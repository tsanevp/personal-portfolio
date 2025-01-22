<template>
  <div id="section-projects" class="mb-5 mt-8">
    <div
      id="project-section"
      v-for="(project, index) in projectStore.getProjects.values()"
    >
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
const projectStore = useProjectStore();

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
