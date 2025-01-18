<template>
  <div id="section-experience" class="mt-8 mb-0">
    <div class="mb-7">
      <h1 class="mb-7">Experience</h1>
    </div>
    <div id="list-experiences" class="timeline">
      <ExperienceCard
        v-for="(experience, index) in experiences"
        :key="experience.companyName + experience.duration"
        :experience="experience"
        :is-last="index === experiences.length - 1"
      />
    </div>

    <div id="section-education">
      <div class="mb-7">
        <h1>Education</h1>
      </div>
      <div id="list-experiences" class="timeline">
        <EducationCard
          v-for="(item, index) in education"
          :key="item.schoolName"
          :education="item"
          :is-last="index === education.length - 1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Api } from "~/types/api";

const experiences = ref<Api.Experience[]>([]);
const education = ref<Api.Education[]>([]);

onMounted(async () => {
  try {
    const experiencesResponse = await $fetch<Api.ApiResponse<Api.Experience>>(
      "/api/experiences"
    );
    const educationResponse = await $fetch<Api.ApiResponse<Api.Education>>(
      "/api/education"
    );
    if (experiencesResponse.success && educationResponse) {
      experiences.value = experiencesResponse.data;
      education.value = educationResponse.data;
    } else {
      console.error(
        "Error fetching experiences or education:",
        experiencesResponse.error,
        educationResponse.error
      );
    }
  } catch (err) {
    console.error("Request failed:", err);
  }
});
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
