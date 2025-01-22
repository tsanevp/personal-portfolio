<template>
  <div id="section-projects" class="mb-5 mt-8">
    <div
      id="project-section"
      v-for="(project, index) in projectStore.getProjects.values()"
    >
      <ProjectSection
        :key="project.projectName"
        :project="project"
        :class="index !== 0 ? 'mt-14' : ''"
      />

      <hr v-if="index !== projectStore.getProjects.length - 1" class="half-border mt-14 mx-auto" />
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
  border: none;
  border-bottom: 2px solid var(--text-color);
}
</style>
