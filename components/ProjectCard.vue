<template>
  <div
    class="group project-card mb-7 md:min-h-[450px] sm:min-h-[375px] xs:min-h-[300px] min-h-[300px] flex flex-col justify-end relative overflow-hidden"
  >
    <a href="https://www.w3schools.com" style="margin-unset" target="_blank">
      <div id="project-image" class="rounded-xl">
        <img
          class="absolute left-0 top-0 h-full w-full rounded-xl group-hover:scale-105 duration-300 ease-out opacity-70"
          src="public\img\test.jpg"
          :alt="`background for ${projectName} project`"
        />
      </div>

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t via-transparent to-transparent"
      ></div>

      <!-- Content Area -->
      <div id="card-footer" class="p-7">
        <div
          class="translate-y-12 group-hover:translate-y-0 transform ease-in-out duration-300"
        >
          <h2 class="text-2xl mb-2">{{ projectName }}</h2>
          <div class="flex flex-wrap space-x-4 mb-4">
            <StackItem icon-name="file-icons:vue" icon-label="Vue" icon-color="white" class="border p-2 rounded-xl" />
            <StackItem icon-name="uil:react" icon-label="React" icon-color="white" class="border p-2 rounded-xl" />
            <StackItem
              icon-name="akar-icons:typescript-fill"
              icon-label="TypeScript"
              icon-color="white"
              class="border p-2 rounded-xl"
            />
          </div>
          <p class="">{{ projectDescription }}</p>
        </div>

        <div
          class="translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transform ease-in-out duration-300"
        >
          <LearnMoreButton :path="`/projects/${projectLink}`" class="mt-3" />
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
const { projectName, projectDescription, projectLink, stack } = defineProps([
  "projectName",
  "projectDescription",
  "projectLink",
  "stack",
]);
</script>

<style scoped>
.project-card {
  box-shadow: inset 0 -100px 100px #8c8c8c;
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
  --tw-gradient-from: #434343;
  --tw-gradient-via: rgba(38, 38, 38, 0.1);
  --tw-gradient-to: rgba(0, 0, 0, 0);
  opacity: .8;
}
</style>
