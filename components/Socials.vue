<template>
  <div id="socials" class="text-2xl flex" :class="divClass">
    <a href="https://github.com/tsanevp" target="_blank" class="h-100" :style="size">
      <Icon name="mdi:github" :size="iconSize" style="align-self: center" />
    </a>
    <a href="https://www.linkedin.com/in/tsanevpeter/" target="_blank" :style="size">
      <Icon name="ri:linkedin-fill" :size="iconSize" style="align-self: center" />
    </a>
    <a href="mailto:petertsanev7@gmail.com" target="_blank" :style="size">
      <Icon name="ic:outline-email" :size="iconSize" style="align-self: center" />
    </a>
  </div>
</template>

<script setup lang="ts">
const rootFontSize = 16;

const props = withDefaults(
  defineProps<{
    divSize?: number;
    divClass?: string;
  }>(),
  {
    divSize: 2.25,
    divClass: "space-x-4",
  }
);

const { divSize, divClass } = props;

const size = computed(() => ({ width: `${divSize}rem`, height: `${divSize}rem` }));
const iconSize = computed(() => `${(rootFontSize * divSize) / 2}px`);
</script>

<style scoped>
#socials > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--seoncdary-color-green);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

#socials > a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}
</style>
