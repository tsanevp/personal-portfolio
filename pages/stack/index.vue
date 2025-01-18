<template>
  <div>
    <StackSection section-header="Frontend" :stack="safeStack.frontend" />
    <StackSection section-header="Backend" :stack="safeStack.backend" />
    <StackSection section-header="Cloud & DevOps" :stack="safeStack.cloudAndDevops" />
    <StackSection section-header="Databases" :stack="safeStack.databases" />
  </div>
</template>

<script setup lang="ts">
import type { Api } from "~/types/api";

const stack = ref<Api.Stack | null>(null);
const safeStack = computed(() => ({
  frontend: stack.value?.frontend || [],
  backend: stack.value?.backend || [],
  cloudAndDevops: stack.value?.cloudAndDevops || [],
  databases: stack.value?.databases || [],
}));

onMounted(async () => {
  try {
    const stackResponse = await $fetch<Api.ApiResponse<Api.Stack>>("/api/stack");
    if (stackResponse.success) {
      stack.value = stackResponse.data[0];
    } else {
      console.error("Error fetching stack:", stackResponse.error);
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
});
</script>

<style scoped>
.stack-items {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.stack-item:hover {
  box-shadow: 0px 5px 10px var(--seoncdary-color-green);
}

.seoncdary-color-green {
  color: var(--seoncdary-color-green);
}
</style>
