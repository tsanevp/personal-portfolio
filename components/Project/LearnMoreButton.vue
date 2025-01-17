<template>
  <NuxtLink
    :to="`${path}`"
    class="btn"
    :class="{
      'border-black': globalStore.lightMode && !borderWhite,
      'border-white': !globalStore.lightMode,
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

<script lang="ts" setup>
const globalStore = useGlobalStore();

const props = withDefaults(
  defineProps<{
    path: string;
    borderWhite?: boolean;
  }>(),
  {
    borderWhite: false,
  }
);

const { path, borderWhite } = props;
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
