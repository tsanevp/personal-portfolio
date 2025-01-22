<template>
  <NuxtLink :to="{path: '/projects', hash: targetId ? `#${targetId}` : ''}" class="btn border-white">
    <p>Learn More</p>
    <Icon
      name="material-symbols:arrow-forward-rounded"
      style="align-self: center"
      class="ml-2 text-base"
    />
  </NuxtLink>
</template>

<script setup lang="ts" >
defineProps({
  targetId: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.btn {
  transition: all 0.5s ease;
}

.btn:hover {
  background-color: var(--secondary-color-green);
  transition: var(--custom-transition);
  color: black;
  border: black 1px solid;
  border-radius: 0.5rem;
}
</style>
