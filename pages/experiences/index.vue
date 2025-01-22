<template>
  <div id="section-experience" class="mt-8 mb-0">
    <div class="mb-7">
      <h1 class="mb-7">Experience</h1>
    </div>
    <div id="list-experiences" class="timeline">
      <ExperienceCard
        v-for="(experience, index) in experienceStore.getExperiences"
        :key="experience.companyName + experience.duration"
        :experience="experience"
        :is-last="index === experienceStore.getExperiences.length - 1"
      />
    </div>

    <div id="section-education" class="mt-4">
      <div class="mb-7">
        <h1>Education</h1>
      </div>
      <div id="list-experiences" class="timeline">
        <EducationCard
          v-for="(item, index) in educationStore.getEducation"
          :key="item.schoolName"
          :education="item"
          :is-last="index === educationStore.getEducation.length - 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experienceStore = useExperienceStore();
const educationStore = useEducationStore();
</script>

<style scoped>
.timeline {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
