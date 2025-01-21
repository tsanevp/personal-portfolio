<template>
  <div
    class="group project-card mb-7 md:min-h-[450px] sm:min-h-[375px] xs:min-h-[300px] min-h-[300px] flex flex-col justify-end relative overflow-hidden text-white"
  >
    <NuxtLink :to="getProjectLink()" style="margin-unset">
      <div id="project-image" class="rounded-xl">
        <img
          class="absolute left-0 top-0 h-full w-full rounded-xl group-hover:scale-105 duration-300 ease-out opacity-70"
          :src="project.projectImageLinks[0]"
          :alt="`background for ${project.projectName} project`"
        />
      </div>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>

      <!-- Content Area -->
      <div id="card-footer" class="p-7">
        <div
          class="lg:translate-y-12 lg:group-hover:translate-y-0 transform ease-in-out duration-300"
        >
          <h2 class="text-2xl mb-2">{{ project.projectName }}</h2>
          <div class="flex flex-wrap space-x-4 mb-4">
            <StackItem
              v-for="icon in project.stack"
              :key="icon?.name"
              :icon-name="icon?.name"
              :icon-label="icon.label"
              class="border p-2 rounded-xl xs-text"
            />
          </div>
          <p class="">{{ project.projectDescription }}</p>
        </div>

        <div
          class="lg:translate-y-12 lg:opacity-0 lg:group-hover:translate-y-0 group-hover:opacity-100 transform ease-in-out duration-300"
        >
          <ProjectLearnMoreButton :path="getProjectLink()" :border-white="true" class="mt-3" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { project } = defineProps(["project"]);

function getProjectLink() {
  const projectLink = project.projectName.replace(/\s/g, "");
  return `projects/${projectLink}`;
}
</script>

<style scoped>
.project-card {
  box-shadow: inset 0 -75px 75px var(--secondary-color-green);
}
#card-footer-contents {
  position: absolute;
  bottom: 0;
  color: white;
}

.bg-gradient-to-t {
  background: linear-gradient(
    to top,
    var(--tw-gradient-from),
    var(--tw-gradient-via),
    var(--tw-gradient-to)
  );
  --tw-gradient-from: #000000;
  --tw-gradient-via: rgba(38, 38, 38, 0.8);
  --tw-gradient-to: rgba(0, 0, 0, 0);
  opacity: 1;
}

@media (max-width: 375px) {
    .xs-text {
        font-size: 10px;
        /* Scale down for smaller screens */
    }
}

@media (max-width: 340px) {
    .xs-text {
        font-size: 8px;
        /* Scale down for smaller screens */
    }
}
</style>
