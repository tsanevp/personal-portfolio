<template>
  <div id="section-experience" class="mt-8">
    <div class="flex justify-between mb-7">
      <h1 class="text-3xl">Experience</h1>
    </div>
    <div id="list-experiences" class="timeline">
      <ExperienceCard
        v-for="(experience, index) in experiences"
        :key="experience.companyName + experience.duration"
        :experience="experience"
        :is-last="index === experiences.length - 1"
      />
    </div>
  </div>
</template>

<script setup>
const experiences = ref([]);

onMounted(async () => {
  try {
    const experiencesResponse = await $fetch("/api/experiences");
    if (experiencesResponse.success) {
      experiences.value = experiencesResponse.data;
    } else {
      console.error("Error fetching experiences:", experiencesResponse.error);
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
});
</script>

<style scoped>
h1 {
  font-weight: bold;
}
.timeline {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
