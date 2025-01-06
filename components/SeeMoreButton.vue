<template>
  <NuxtLink
    :to="`${path}`"
    class="flex flex-wrap content-center pl-2 pe-2"
    :class="{ 'btn-light': globalStore.lightMode, 'btn-dark': !globalStore.lightMode }"
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

<script setup>
const globalStore = useGlobalStore();
const { path } = defineProps(["path"]);
</script>

<style scoped>
.btn-dark {
}

.btn-dark:hover {
  transition: 2s;
}

.btn-light {
}

.btn-light:hover {
  transition: 0.5s;
  color: black;
}
</style>
