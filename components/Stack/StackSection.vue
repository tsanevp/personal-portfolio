<template>
    <div class="stack-section mb-7">
      <h1 class="text-2xl md:text-3xl">{{ sectionHeader }}</h1>
      <div class="stack-items grid gap-5 grid-cols-7 h-auto mt-4">
        <StackCard v-for="item in stack" :stack-item="item" />
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  sectionHeader: {
    type: String,
    required: true
  },
  stack: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.stack-items {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
</style>