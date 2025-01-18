<!-- pages/projects/[id].vue -->
<template>
  <div>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="slide in 5" :key="slide">
        <div class="group">
          <img
            class="rounded-xl group-hover:scale-105 duration-300 ease-out h-72 shadow shadow-[var(--secondary-color-green)]"
            :src="project?.projectImageLink"
            :alt="`background for ${project?.projectName} project`"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div class="card mt-7 mb-5 flex flex-col justify-between">
      <h1>{{ project?.projectName }}</h1>

      <div class="mt-3">
        <h2 class="text-xl font-bold text-secondary">Goal</h2>
        <p>Build {{ project?.projectDescription.toLowerCase() }}</p>
      </div>

      <div class="mt-3">
        <h2 class="text-xl font-bold">Stack</h2>
        <div class="flex flex-wrap space-x-4 mt-2">
          <StackItem
            v-for="icon in project?.stack"
            :key="icon?.name"
            :icon-name="icon?.name"
            :icon-label="icon.label"
            class="border p-2 rounded-xl text-xs"
          />
        </div>
      </div>

      <div class="mt-3">
        <h2 class="text-xl font-bold">Purpose</h2>
        <p>Build {{ project?.projectDescription.toLowerCase() }}</p>
      </div>

      <a href="https://github.com/tsanevp" target="_blank" class="btn">See Code</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Api } from "~/types/api";

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};

// Fetch project data based on the route
const route = useRoute();
const project = ref<Api.Project | null>(null);

onMounted(async () => {
  const projectId = route.params.id;

  const projectResponse = await $fetch<Api.ApiSingleResponse<Api.Project>>(
    `/api/projects/${projectId}`
  );

  project.value = projectResponse.data;
});
</script>

<style scoped>
.btn {
  transition: all 0.5s ease;
}

.btn:hover {
  background-color: var(--secondary-color-green);
  transition: var(--custom-transition);
  color: black;
  border: black 1px solid;
  border-radius: 0.5rem;
}
</style>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--secondary-color-green);
  color: var(--secondary-color-green);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: var(--text-color);
  transition: 300ms all ease-in-out;
}

.carousel__prev:hover,
.carousel__next:hover {
  box-sizing: content-box;
  color: var(--secondary-color-green);
}

.carousel__pagination {
  position: relative;
  bottom: 0px;
}

.carousel__pagination-button {
  background-color: var(--text-color);
  transition: 300ms all ease-in-out;
}

.carousel__pagination-button:hover {
  background-color: var(--secondary-color-green);
}

.carousel__pagination-button--active {
  background-color: var(--secondary-color-green);
}
</style>
