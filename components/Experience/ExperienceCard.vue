<template>
  <div class="row" :class="!isLast ? 'element pb-5' : 'vertical-line-transparent'">
    <div class="timeline-pin">
      <div class="pin-head"></div>
    </div>
    <div class="ml-8 content-card">
      <div class="mb-2">
        <h3 class="seoncdary-color-green">{{ experience.companyName }}</h3>
        <h2 class="text-lg font-bold">{{ experience.jobTitle }}</h2>
        <h2 class="text-sm text-secondary">{{ experience.duration }}</h2>
      </div>
      <div>
        <p>{{ experience.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  experience: {
    type: Object,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  }
});
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
}

.element {
  border-left: 3px solid #bfbfbf;
}

.content-card {
  position: relative;
  top: -2rem;
}

.vertical-line-transparent {
  border-left: 3px solid transparent;
  position: relative;
}

.timeline-pin {
  position: absolute;
  left: -0.59rem;
  top: -0.01rem;
}

.pin-head {
  width: 1rem;
  height: 1rem;
  border: 4px var(--text-color) solid;
  border-radius: 100rem;
  background: var(--seoncdary-color-green);
}

.seoncdary-color-green {
  color: var(--seoncdary-color-green)
}
</style>
