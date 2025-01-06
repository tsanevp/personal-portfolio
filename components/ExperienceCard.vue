<template>
  <div class="row" :class="!isLast ? 'element pb-5' : 'vertical-line-transparent'">
    <div class="timeline-pin">
      <div class="pin-head"></div>
    </div>
    <div class="ml-8 content-card">
      <div class="mb-2">
        <h3>{{ experience.companyName }}</h3>
        <h2 class="text-lg font-bold">{{ experience.jobTitle }}</h2>
        <h2 class="text-sm text-secondary">{{ experience.duration }}</h2>
      </div>
      <div class="mb-3">
        <p>{{ experience.description }}</p>
      </div>
      <LearnMoreButton :path="`/experiences/${experience.link}`" />
    </div>
  </div>
</template>

<script setup>
const { experience, isLast } = defineProps(["experience", "isLast"]);
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  position: relative; 
  flex-direction: row;
}

.element {
  border-left: 3px solid #bfbfbf; /* Set a transparent left border */
}

.content-card {
    position: relative;
    top: -2rem;
}

.vertical-line-transparent {
    border-left: 3px solid transparent;
    position: relative; /* To position pin correctly */
}

.timeline-pin {
  position: absolute;
  left: -0.57rem;
}

.pin-head {
  width: 1rem;
  height: 1rem;
  border: 4px #000000 solid;
  border-radius: 100rem;
  background: #bfbfbf;
}
</style>
