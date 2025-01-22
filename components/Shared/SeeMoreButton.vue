<template>
  <NuxtLink
    :to="`${path}`"
    class="flex flex-wrap text-secondary content-center hover-underline-animation see-more"
  >
    <p class="pb-0">See More</p>
    <Icon
      name="material-symbols:arrow-forward-rounded"
      style="align-self: center"
      class="ml-2 text-base pb-0"
      size="20"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  path: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.see-more:hover {
  transition: var(--custom-transition);
  color: var(--secondary-color-green);
}
</style>
