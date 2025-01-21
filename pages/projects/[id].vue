<!-- pages/projects/[id].vue -->
<template>
  <div>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="image in project?.projectImageLinks" :key="image">
        <div class="group">
          <img
            class="rounded-xl group-hover:scale-105 duration-300 ease-out shadow shadow-[var(--secondary-color-green)]"
            :src="image"
            :alt="`background for ${project?.projectName} project`"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div
      class="card mt-7 mb-5 flex flex-col justify-between"
      :class="globalStore.getLightMode ? 'bg-[#f0f0f0]' : ''"
    >
      <h1 class="text-2xl">{{ project?.projectName }}</h1>

      <div class="flex flex-wrap space-x-4 mt-2">
        <StackItem
          v-for="icon in project?.stack"
          :key="icon?.name"
          :icon-name="icon?.name"
          :icon-label="icon.label"
          class="border p-2 rounded-xl text-sm"
        />
      </div>

      <div class="mt-3 text-secondary flex">
        <p>{{ project?.projectDescription }}</p>
      </div>

      <div class="mt-3">
        <div class="flex flex-wrap space-x-4">
          <a
            v-if="project?.links.liveSite"
            :href="project?.links.liveSite"
            target="_blank"
            class="btn min-w-fit"
            :class="globalStore.getLightMode ? 'border-black' : ''"
          >
            Live Site
          </a>
          <a
            v-if="project?.links.frontend"
            :href="project?.links.frontend"
            target="_blank"
            class="btn min-w-fit"
            :class="globalStore.getLightMode ? 'border-black' : ''"
          >
          Client Code
          </a>
          <a
            v-if="project?.links.backend"
            :href="project?.links.backend"
            target="_blank"
            class="btn min-w-fit"
            :class="globalStore.getLightMode ? 'border-black' : ''"
          >
          Server Code
          </a>
          <a
            v-if="project?.links.code"
            :href="project?.links.code"
            target="_blank"
            class="btn min-w-fit"
            :class="globalStore.getLightMode ? 'border-black' : ''"
          >
          See Code
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-4">
        <h2 class="">Value</h2>
        <ul class="list-disc mt-2 ml-7">
          <li class="mt-1">
            Build {{ project?.projectDescription.toLowerCase().slice(0, 70) }}
          </li>
          <li class="mt-1">
            Build {{ project?.projectDescription.toLowerCase().slice(0, 70) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Api } from "~/types/api";

const globalStore = useGlobalStore();

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

h2 {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
}

img {
  max-height: 30rem;
  max-width: 37.5rem;
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
