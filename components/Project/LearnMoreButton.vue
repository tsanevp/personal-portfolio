<template>
  <NuxtLink :to="`${path}`" class="btn border-white">
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
  path: {
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
  background-color: var(--seoncdary-color-green);
  transition: var(--custom-transition);
  color: black;
  border: black 1px solid;
  border-radius: 0.5rem;
}
</style>
