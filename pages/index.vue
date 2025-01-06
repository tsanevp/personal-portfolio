<template>
  <div>
    <div id="section-about-me" class="card my-7">
      <div class="flex justify-between">
        <h1 class="text-xl">Peter Tsanev</h1>
        <div id="socials" class="text-xl">
          <a href="https://github.com/tsanevp" target="_blank">
            <Icon
              name="mdi:github"
              :style="{ color: color }"
              style="align-self: center"
              class="mr-2"
            />
          </a>
          <a href="https://www.linkedin.com/in/tsanevpeter/" target="_blank">
            <Icon
              name="ri:linkedin-fill"
              :style="{ color: color }"
              style="align-self: center"
              class="mr-2"
            />
          </a>
          <a href="mailto:petertsanev7@gmail.com" target="_blank">
            <Icon
              name="ic:outline-email"
              :style="{ color: color }"
              style="align-self: center"
              class="mr-2"
            />
          </a>
        </div>
      </div>

      <div class="flex text-sm mb-2 text-secondary">
        <Icon name="gis:pin" style="color: #8c8c8c; align-self: center" class="mr-2" />
        <p>Seattle, WA</p>
      </div>

      <p>Full-stack Developer</p>
    </div>

    <div id="section-my-stack" class="mb-5">
      <h1 class="text-xl">Current Stack</h1>
      <div class="flex flex-wrap">
        <StackItem icon-name="file-icons:vue" icon-label="Vue" />
        <StackItem icon-name="uil:react" icon-label="React" />
        <StackItem icon-name="akar-icons:typescript-fill" icon-label="TypeScript" />
        <StackItem icon-name="akar-icons:javascript-fill" icon-label="JavaScript" />
        <StackItem icon-name="ri:java-fill" icon-label="Java" />
        <StackItem icon-name="devicon-plain:csharp" icon-label="C#" />
        <StackItem icon-name="simple-icons:dotnet" icon-label=".NET" />
        <StackItem icon-name="flowbite:html-solid" icon-label="HTML" />
        <StackItem icon-name="flowbite:css-solid" icon-label="CSS" />
        <StackItem icon-name="akar-icons:javascript-fill" icon-label="JavaScript" />
      </div>
    </div>

    <div id="section-experience" class="mb-5">
      <div class="flex justify-between mb-2">
        <h1 class="text-xl">Work Experience</h1>
        <NuxtLink to="/experience">
          <p>See More</p>
        </NuxtLink>
      </div>
      <div id="list-experiences" class="timeline mt-12">
        <ExperienceCard
          v-for="(experience, index) in experiences"
          :key="experience.companyName + experience.duration"
          :experience="experience"
          :is-last="index === experiences.length - 1"
        />
      </div>
    </div>

    <div id="section-projects" class="mb-5">
      <div class="flex justify-between mb-2">
        <h1 class="text-xl">Projects</h1>
        <NuxtLink to="/projects">
          <p>See More</p>
        </NuxtLink>
      </div>
      <div id="list-experiences">
        <ProjectCard
          v-for="project in projects.values()"
          :project-name="project.projectName"
          project-description="is simply dummy text of the printing and typesetting industry."
          :project-link="projectLink"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const globalStore = useGlobalStore();
const experiences = ref([]);
const projects = ref([]);

// Reactively compute icon & label color
const color = computed(() => (globalStore.lightMode ? "black" : "white"));

onMounted(async () => {
  try {
    const experiencesResponse = await $fetch("/api/experiences");
    const projectsResponse = await $fetch("/api/projects");
    if (experiencesResponse.success && projectsResponse.success) {
      experiences.value = experiencesResponse.data;
      projects.value = projectsResponse.data;
    } else {
      console.error(
        "Error fetching experiences or projects:",
        experiencesResponse.error,
        projectsResponse.error
      );
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
