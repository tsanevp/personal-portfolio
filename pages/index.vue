<template>
  <div id="section-home" class="mt-8">
    <div id="section-about-me" class="card">
      <div class="flex justify-between">
        <h1>Peter Tsanev</h1>
        <Socials />
      </div>

      <div class="flex mb-2 text-secondary">
        <Icon name="gis:pin" style="align-self: center" class="mr-2" />
        <p>Seattle, WA</p>
      </div>

      <p class="text-lg seoncdary-color-green">Full-stack Developer</p>
    </div>

    <div id="section-my-stack" class="mt-8">
      <div class="flex justify-between mb-2">
        <h1>Current Stack</h1>
        <SharedSeeMoreButton path="/stack" />
      </div>
      <div class="mb-3">
        <h2 class="text-xl mb-1 text-secondary">Frontend</h2>
        <div class="flex flex-wrap gap-5 text-lg">
          <StackItem
            v-for="icon in safeStack.frontend"
            :icon-name="icon.name"
            :icon-label="icon.label"
          />
        </div>
      </div>
      <div>
        <h2 class="text-xl mb-1 text-secondary">Backend</h2>
        <div class="flex flex-wrap gap-5 text-lg">
          <StackItem
            v-for="icon in safeStack.backend"
            :icon-name="icon.name"
            :icon-label="icon.label"
          />
        </div>
      </div>
    </div>

    <div id="section-experience" class="mt-8">
      <div class="flex justify-between mb-7">
        <h1>Experience</h1>
        <SharedSeeMoreButton path="/experiences" />
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

    <div id="section-education" class="">
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

    <div id="section-projects" class="mb-5">
      <div class="flex justify-between mb-5">
        <h1>Projects</h1>
        <SharedSeeMoreButton path="/projects" />
      </div>
      <div id="list-experiences">
        <ProjectCard
          v-for="project in projects.values()"
          :key="project.projectName"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Api } from "~/types/api";

const experiences = ref<Api.Experience[]>([]);
const education = ref<Api.Education[]>([]);
const projects = ref<Api.Project[]>([]);
const stack = ref<Api.Stack | null>(null);
const safeStack = computed(() => ({
  frontend: stack.value?.frontend || [],
  backend: stack.value?.backend || [],
  cloudAndDevops: stack.value?.cloudAndDevops || [],
  databases: stack.value?.databases || [],
}));

onMounted(async () => {
  try {
    const experiencesResponse = await $fetch<Api.ApiResponse<Api.Experience>>(
      "/api/experiences?limit=3"
    );
    const educationResponse = await $fetch<Api.ApiResponse<Api.Education>>(
      "/api/education"
    );
    const projectsResponse = await $fetch<Api.ApiResponse<Api.Project>>("/api/projects");
    const stackResponse = await $fetch<Api.ApiResponse<Api.Stack>>("/api/stack");
    if (
      experiencesResponse.success &&
      educationResponse &&
      projectsResponse.success &&
      stackResponse.success
    ) {
      experiences.value = experiencesResponse.data;
      education.value = educationResponse.data;
      projects.value = projectsResponse.data;
      stack.value = stackResponse.data[0];
    } else {
      console.error(
        "Error fetching experiences, education, projects, or stack:",
        experiencesResponse.error,
        educationResponse.error,
        projectsResponse.error,
        stackResponse.error
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

#section-education {
  position: relative;
  top: -1rem;
}

#section-projects {
  position: relative;
  top: -2.5rem;
}
</style>
