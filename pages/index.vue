<template>
  <div>
    <!-- <div class="container">
      <div class="progress" :style="{ animationDuration: `${loadingDuration}s` }">
        <span class="percent">%</span>
      </div>
    </div> -->

    <div id="section-about-me" class="card mt-8">
      <div class="flex justify-between">
        <h1 class="text-2xl md:text-3xl">Peter Tsanev</h1>
        <Socials />
      </div>

      <div class="flex mb-2 text-secondary">
        <Icon name="gis:pin" style="align-self: center" class="mr-2" />
        <p>Seattle, WA</p>
      </div>

      <p class="text-lg">Full-stack Developer</p>
    </div>

    <div id="section-my-stack" class="mt-8">
      <div class="flex justify-between mb-2">
        <h1 class="text-3xl">Current Stack</h1>
        <SeeMoreButton path="/stack" />
      </div>
      <div class="mb-3">
        <h2 class="text-xl mb-1 text-secondary">Frontend</h2>
        <div class="flex flex-wrap gap-5 text-lg">
          <StackItem v-for="icon in stack.frontend" :icon-name="icon.name" :icon-label="icon.label" />
        </div>
      </div>
      <div>
        <h2 class="text-xl mb-1 text-secondary">Backend</h2>
        <div class="flex flex-wrap gap-5 text-lg">
          <StackItem v-for="icon in stack.backend" :icon-name="icon.name" :icon-label="icon.label" />
        </div>
      </div>
    </div>

    <div id="section-experience" class="mt-8">
      <div class="flex justify-between mb-7">
        <h1 class="text-3xl">Experience</h1>
        <SeeMoreButton path="/experiences" />
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

    <div id="section-projects" class="mb-5">
      <div class="flex justify-between mb-5">
        <h1 class="text-3xl">Projects</h1>
        <SeeMoreButton path="/projects" />
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

<script setup>
const globalStore = useGlobalStore();
const experiences = ref([]);
const projects = ref([]);
const stack = ref([]);
const isLoading = ref(true);

// const loadingDuration = Math.random() + 1;

// Reactively compute icon & label color
onMounted(async () => {
  try {
    const experiencesResponse = await $fetch("/api/experiences");
    const projectsResponse = await $fetch("/api/projects");
    const stackResponse = await $fetch("/api/stack");
    if (experiencesResponse.success && projectsResponse.success && stackResponse.success) {
      experiences.value = experiencesResponse.data;
      projects.value = projectsResponse.data;
      stack.value = stackResponse.data[0];
    } else {
      console.error(
        "Error fetching experiences or projects:",
        experiencesResponse.error,
        projectsResponse.error,
        stack.error
      );
    }
  } catch (err) {
    console.error("Request failed:", err);
  } finally {
    isLoading.value = false;
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

/* 
.container {
  width: 400px;
  height: 50px;
  position: relative;
  border: 1px solid black;
}

.progress {
  background: blue;
  float: left;
  color: white;
  width: 100%;
  height: 50px;
  line-height: 50px;
  animation-name: slideInFromLeft;
  animation-duration: 30s;
  animation-timing-function: cubic-bezier(0, 0.9, 0.9, 0.999);
  text-align: center;
}

.percent::before {
  content: counter(count);
  animation-name: counter;
  animation-duration: 30s;
  animation-timing-function: cubic-bezier(0, 0.9, 0.9, 0.999);
  counter-reset: count 0;
}

@keyframes slideInFromLeft {
  0% {
    width: 0%;
  }
  99% {
    width: 99%;
  }
}

@keyframes counter {
  0% {
    counter-increment: count 0;
  }
  5% {
    counter-increment: count 30;
  }
  10% {
    counter-increment: count 50;
  }
  20% {
    counter-increment: count 60;
  }
  30% {
    counter-increment: count 70;
  }
  40% {
    counter-increment: count 80;
  }
  50% {
    counter-increment: count 90;
  }
  60% {
    counter-increment: count 95;
  }
  70% {
    counter-increment: count 98;
  }
  80% {
    counter-increment: count 99;
  }
  90% {
    counter-increment: count 90;
  }
  100% {
    counter-increment: count 100;
  }
} */
</style>
