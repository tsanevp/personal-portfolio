<template>
  <div
    class="group project-card mb-4 text-white min-h-96 flex flex-col justify-end relative"
    :style="{ backgroundImage: `url(/img/test.jpg)` }"
  >
    <!-- Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-blue-400 via-transparent to-transparent"
    ></div>

    <!-- Content Area -->
    <div id="card-footer" class="relative p-5">
      <div
        class="translate-y-12 group-hover:translate-y-0 transform ease-in-out duration-300"
      >
        <h3 class="text-xl font-bold group-hover:text-blue">{{ projectName }}</h3>
        <div class="flex space-x-6 mb-2">
          <StackItem icon-name="file-icons:vue" icon-label="Vue" icon-color="white" />
          <StackItem icon-name="uil:react" icon-label="React" icon-color="white" />
          <StackItem
            icon-name="akar-icons:typescript-fill"
            icon-label="TypeScript"
            icon-color="white"
          />d
        </div>
        <p>{{ projectDescription }}</p>
      </div>

      <div
        class="translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transform ease-in-out duration-300"
      >
        <LearnMoreButton :path="`/projects/${projectLink}`" class="mt-4" />
      </div>
    </div>
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
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
  position: relative;
}

.project-card:hover {
  transform: scale(1.01);
}
#card-footer-contents {
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8); /* Ensures text visibility */
}

.bg-gradient-to-t {
  background: linear-gradient(
    to top,
    var(--tw-gradient-from),
    var(--tw-gradient-via),
    var(--tw-gradient-to)
  );
  --tw-gradient-from: rgb(3, 19, 44); /* Blue */
  --tw-gradient-via: rgba(59, 130, 246, 0); /* Transparent */
  --tw-gradient-to: rgba(0, 0, 0, 0); /* Transparent */
  opacity: 0.9; /* Slightly darkens the blend */
}

/* Slide-Up Transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
