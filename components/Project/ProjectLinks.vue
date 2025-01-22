<template>
  <div class="flex flex-wrap space-x-4">
    <a
      v-if="project?.links.liveSite"
      :href="project?.links.liveSite"
      target="_blank"
      class="btn min-w-fit"
      :class="globalStore.getLightMode ? 'border-black' : ''"
    >
      Live Site
    </a>
    <a
      v-if="project?.links.frontend"
      :href="project?.links.frontend"
      target="_blank"
      class="btn min-w-fit"
      :class="globalStore.getLightMode ? 'border-black' : ''"
    >
      Client Code
    </a>
    <a
      v-if="project?.links.backend"
      :href="project?.links.backend"
      target="_blank"
      class="btn min-w-fit"
      :class="globalStore.getLightMode ? 'border-black' : ''"
    >
      Server Code
    </a>
    <a
      v-if="project?.links.code"
      :href="project?.links.code"
      target="_blank"
      class="btn min-w-fit"
      :class="globalStore.getLightMode ? 'border-black' : ''"
    >
      See Code
    </a>
  </div>
</template>

<script lang="ts" setup>
const globalStore = useGlobalStore();

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.btn {
  transition: all 0.5s ease;
  font-size: var(--font-size);
}

.btn:hover {
  background-color: var(--secondary-color-green);
  transition: var(--custom-transition);
  color: black;
  border: black 1px solid;
  border-radius: 0.5rem;
}
</style>
