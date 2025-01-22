<template>
  <NuxtLayout name="default" />
</template>

<script setup lang="ts">
onServerPrefetch(() => {
  console.log('hello');
});
</script>