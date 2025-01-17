<template>
    <div class="stack-item rounded-lg bg-[#262626] shadow shadow-[var(--seoncdary-color-green)] hover:scale-105 transition ease-in-out duration-300">
        <div class="p-6 flex flex-col items-center text-center">
            <Icon :name="stackItem.name" size="28" class="seoncdary-color-green" />
            <h2 class="text-xl font-bold mt-5 text-white">{{ stackItem.label }}</h2>
            <p class="text-sm mt-5 text-secondary">{{ stackItem.description }}</p>
          </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  stackItem: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.stack-item:hover {
  cursor: pointer;
  box-shadow: 0px 5px 10px var(--seoncdary-color-green);
}

.seoncdary-color-green {
  color: var(--seoncdary-color-green);
}
</style>