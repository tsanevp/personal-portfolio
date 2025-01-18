<template>
  <div class="flex">
    <Icon :name="iconName" class="mr-2 self-center" />
    <p>{{ iconLabel }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    required: true,
  },
  iconLabel: {
    type: String,
    required: true,
  },
});
</script>
