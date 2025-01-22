<template>
  <div
    class="group project-card mb-7 md:min-h-[450px] sm:min-h-[375px] xs:min-h-[300px] min-h-[300px] flex flex-col justify-end relative overflow-hidden text-white"
  >
    <NuxtLink :to="{path: '/projects', hash: getTargetId() ? `#${getTargetId()}` : ''}" style="margin-unset">
      <div id="project-image" class="rounded-xl">
        <img
          class="absolute left-0 top-0 h-full w-full rounded-lg group-hover:scale-105 duration-300 ease-out"
          :src="project.projectImageLinks[0]"
          :alt="`background for ${project.projectName} project`"
        />
      </div>

      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"></div>

      <!-- Content Area -->
      <div id="card-footer" class="p-5 pb-7">
        <div
          class="lg:translate-y-12 lg:group-hover:translate-y-0 transform ease-in-out duration-300"
        >
          <h2 class="text-2xl mb-2">{{ project.projectName }}</h2>
          <div class="flex flex-wrap space-x-4 mb-2">
            <StackItem
              v-for="icon in project.stack"
              :key="icon?.name"
              :icon-name="icon?.name"
              :icon-label="icon.label"
              class="border p-2 rounded-lg xs-text"
            />
          </div>
          <p>{{ project.projectDescription }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { project } = defineProps(["project"]);

function getTargetId() {
  return project.projectName.replace(/\s/g, "");
}
</script>

<style scoped>
.project-card {
  transition: all ease-in-out 300ms;
}
.project-card:hover {
  box-shadow: 0px 5px 10px var(--secondary-color-green);
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
    70%
  );
  --tw-gradient-from: #000000;
  --tw-gradient-via: rgba(0, 0, 0, .85);
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
