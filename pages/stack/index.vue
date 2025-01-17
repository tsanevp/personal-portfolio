<template>
  <div>
    <StackSection section-header="Frontend" :stack="stack.frontend" />
    <StackSection section-header="Backend" :stack="stack.backend" />
    <StackSection section-header="Cloud & DevOps" :stack="stack.cloudAndDevops" />
    <StackSection section-header="Databases" :stack="stack.databases" />
  </div>
</template>

<script setup>
const stack = ref([]);

onMounted(async () => {
  try {
    const stackResponse = await $fetch("/api/stack");
    if (stackResponse.success) {
      stack.value = stackResponse.data[0];
    } else {
      console.error("Error fetching stack:", stack.error);
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
  cursor: pointer;
  box-shadow: 0px 5px 10px var(--seoncdary-color-green);
}

.seoncdary-color-green {
  color: var(--seoncdary-color-green);
}
</style>
