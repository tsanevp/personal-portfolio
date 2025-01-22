<template>
  <div id="section-stack" class="mt-8">
    <StackSection section-header="Frontend" :stack="safeStack.frontend" />
    <StackSection section-header="Backend" :stack="safeStack.backend" class="mt-12" />
    <StackSection section-header="Cloud & DevOps" :stack="safeStack.cloudAndDevops" class="mt-12" />
    <StackSection section-header="Databases" :stack="safeStack.databases" class="mt-12" />
  </div>
</template>

<script setup lang="ts">
const stackStore = useStackStore();

const safeStack = computed(() => ({
  frontend: stackStore.getStack?.frontend || [],
  backend: stackStore.getStack?.backend || [],
  cloudAndDevops: stackStore.getStack?.cloudAndDevops || [],
  databases: stackStore.getStack?.databases || [],
}));
</script>

<style scoped>
.stack-items {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.stack-item:hover {
  box-shadow: 0px 5px 10px var(--secondary-color-green);
}
</style>
