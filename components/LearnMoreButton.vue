<template>
  <NuxtLink
    :to="`${path}`"
    class="btn"
    :class="{
      'btn-light border-black': globalStore.lightMode,
      'btn-dark border-white': !globalStore.lightMode,
    }"
  >
    <p>Learn More</p>
    <Icon
      name="material-symbols:arrow-forward-rounded"
      style="align-self: center"
      class="ml-2 text-base"
    />
  </NuxtLink>
</template>

<script setup>
const globalStore = useGlobalStore();
const { path } = defineProps(["path"]);
</script>

<style scoped>
.btn-dark {
}

.btn-dark:hover {
  background-color: #262626;
  transition: 0.5s;
}

.btn-light {
}

.btn-light:hover {
  background-color: #f0f0f0;
  transition: 0.5s;
}
</style>
