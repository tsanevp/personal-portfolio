<template>
  <div class="flex flex-wrap justify-center space-x-4">
    <a
      v-for="(label, key) in filteredLinks"
      :key="key"
      :href="project.links[key]"
      :target="project.links[key] === '/' ? '_self' : '_blank'"
      class="btn border-[var(--secondary-color-green)] text-base min-w-28"
      :title="getTitle(label)"
    >
      {{ label }}
    </a>
  </div>
</template>

<script setup lang="ts">
const { project } = defineProps(["project"]);

// Filter the links to include only those with valid URLs
const filteredLinks = computed(() => {
  const labels: Record<string, string> = {
    liveSite: "Live Site",
    frontend: "Client Code",
    backend: "Server Code",
    code: "See Code",
  };

  return Object.entries(labels).reduce((acc, [key, label]) => {
    if (project.links?.[key]) {
      acc[key] = label;
    }
    return acc;
  }, {} as Record<string, string>);
});

const getTitle = function (label: string) {
  return label === "Live Site" ? "Server may take up to 2 minutes to initialize" : "";
};
</script>

<style scoped>
a {
  display: flex;
  justify-content: center;
}

.btn {
  transition: var(--custom-transition);
}

.btn:hover {
  background-color: var(--secondary-color-green);
  color: black;
  border: black 1px solid;
  border-radius: 0.5rem;
}
</style>
