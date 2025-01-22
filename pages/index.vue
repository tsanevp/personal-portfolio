<template>
  <div id="section-home" class="mt-8">
    <div id="section-about-me" class="card">
      <div class="flex justify-between">
        <h1>Peter Tsanev</h1>
        <Socials />
      </div>

      <div class="flex mb-2 text-secondary">
        <Icon name="gis:pin" style="align-self: center" class="mr-1" />
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
            v-for="icon in stackStore.getStack?.frontend"
            :icon-name="icon.name"
            :icon-label="icon.label"
          />
        </div>
      </div>
      <div>
        <h2 class="text-xl mb-1 text-secondary">Backend</h2>
        <div class="flex flex-wrap gap-5 text-lg">
          <StackItem
            v-for="icon in limitedBackend"
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
          v-for="(experience, index) in experienceStore.getExperiences.slice(0, 3)"
          :key="experience.companyName + experience.duration"
          :experience="experience"
          :is-last="index === experienceStore.getExperiences.slice(0, 3).length - 1"
        />
      </div>
    </div>

    <div id="section-education" class="">
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

    <div id="section-projects" class="mb-5">
      <div class="flex justify-between mb-5">
        <h1>Projects</h1>
        <SharedSeeMoreButton path="/projects" />
      </div>
      <div id="list-experiences">
        <ProjectCard
          v-for="project in projectStore.getProjects.slice(0, 3).values()"
          :key="project.projectName"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const experienceStore = useExperienceStore();
const projectStore = useProjectStore();
const stackStore = useStackStore();
const educationStore = useEducationStore();

const limitedBackend = computed(() =>
  stackStore.getStack?.backend.slice(0, stackStore.getStack?.frontend.length)
);
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
