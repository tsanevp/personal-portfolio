<template>
  <div :id="getTargetId()" class="project-section">
    <div>
      <h1>{{ project?.projectName }}</h1>

      <div class="mt-2 text-secondary flex">
        <p>{{ project?.projectDescription }}</p>
      </div>
    </div>

    <div class="mt-4">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="image in project?.projectImageLinks" :key="image">
          <div class="group">
            <img
              class="thumbnail rounded-lg group-hover:scale-105 duration-300 ease-out shadow shadow-[var(--secondary-color-green)]"
              :src="image"
              :alt="`background for ${project?.projectName} project`"
              @click="openImage(image)"
            />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>

      <ProjectLinks :project="project" class="mt-5" />
    </div>

    <div class="mt-8" :class="globalStore.getLightMode ? 'bg-[#f0f0f0]' : ''">
      <h2>Stack</h2>
      <div class="flex flex-wrap space-x-4 mt-2">
        <StackItem
          v-for="icon in project?.stack"
          :key="icon?.name"
          :icon-name="icon?.name"
          :icon-label="icon.label"
          class="border p-2 rounded-lg xs-text"
          :class="globalStore.getLightMode ? 'border-black' : ''"
        />
      </div>

      <div class="mt-5">
        <h2 class="">Value</h2>
        <ul class="list-disc mt-2 ml-7">
          <li v-for="item in project?.value" class="mt-1">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div v-if="isImageOpen" class="modal" @click.self="closeImage">
      <div class="modal-content">
        <img :src="imageSource" alt="Enlarged img" class="enlarged-image rounded-lg" />
        <button class="close-btn text-lg w-8 h-8 rounded-lg" @click="closeImage">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { project } = defineProps(["project"]);

const globalStore = useGlobalStore();

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};

const isImageOpen = ref(false);
const imageSource = ref("");

const openImage = (image: string) => {
  isImageOpen.value = true;
  imageSource.value = image;
};

const closeImage = () => {
  isImageOpen.value = false;
  imageSource.value = "";
};

function getTargetId() {
  return project.projectName.replace(/\s/g, "");
}
</script>

<style scoped>
h2 {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: bold;
}

img {
  cursor: pointer;
  max-height: 30rem;
  max-width: 37.5rem;
}

/** Enlarged image modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.enlarged-image {
  max-width: 90%;
  max-height: 90%;
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 2%;
  right: 6%;
  background: white;
  color: black;
  border: black 1px solid;
  cursor: pointer;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}

.close-btn:hover {
  background-color: var(--secondary-color-green);
  color: black;
  border: black 1px solid;
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
