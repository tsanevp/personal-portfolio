<template>
  <div class="row pb-8" :class="!isLast ? 'element' : 'vertical-line-transparent' ">
    <div class="timeline-pin">
      <div class="pin-head"></div>
    </div>
    <div class="ml-8 content-card">
      <div class="mb-2">
        <h3 class="">{{ experience.companyName }}</h3>
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
  border-left: 3px solid transparent; /* Set a transparent left border */
  border-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(128, 128, 128) 25%, rgb(255, 255, 255) 100%) 1;
}

.content-card {
    position: relative;
    top: -2rem;
}

.vertical-line {
  border-left: 3px solid #7ba;
  position: relative; /* To position pin correctly */
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
  border: 4px black solid;
  border-radius: 100rem;
  background: #ffff;
}
</style>
