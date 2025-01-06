<template>
  <div>
    <header>
      <nav
        id="nav-header"
        class="container mx-auto p-4 flex justify-between center-content"
      >
        <NuxtLink to="/" class="font-bold text-xl">Peter Tsanev</NuxtLink>

        <div class="hidden md:block">
          <ul class="flex gap-10 not-active h-full">
            <li>
              <NuxtLink
                to="/"
                :class="[
                  { 'router-link-exact-active': $route.path === '/' },
                  { 'btn-light': globalStore.lightMode && $route.path !== '/' },
                  { 'btn-dark': !globalStore.lightMode && $route.path !== '/' },
                ]"
                class="flex h-full content-center flex-wrap"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/experience"
                :class="[
                  { 'router-link-exact-active': $route.path === '/experience' },
                  { 'btn-light': globalStore.lightMode && $route.path !== '/experience' },
                  { 'btn-dark': !globalStore.lightMode && $route.path !== '/experience' },
                ]"
                class="flex h-full content-center flex-wrap"
              >
                Experience
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projects"
                :class="[
                  { 'router-link-exact-active': $route.path === '/projects' },
                  { 'btn-light': globalStore.lightMode && $route.path !== '/projects' },
                  { 'btn-dark': !globalStore.lightMode && $route.path !== '/projects' },
                ]"
                class="flex h-full content-center flex-wrap"
              >
                Projects
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Moj5pPJDZtKwaVwtGMm0iKZiz_rSgHB_/view?usp=sharing"
                target="_blank"
                :class="{
                  'btn-light': globalStore.lightMode,
                  'btn-dark': !globalStore.lightMode,
                }"
                class="flex h-full content-center flex-wrap"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div class="flex">
          <Icon
            v-if="globalStore.getLightMode"
            name="tdesign:mode-dark"
            style="color: black"
            @click="setLightMode()"
            size="24"
          />
          <Icon
            v-else
            name="entypo:light-up"
            style="color: white"
            @click="setLightMode()"
            size="24"
          />

          <!-- Hamburger Icon -->
          <div class="ml-4 md:hidden">
            <Icon
              name="solar:hamburger-menu-outline"
              size="24"
              style="color: white"
              @click="toggleMenu"
              aria-label="Toggle Menu"
            />

            <!-- Navigation Links -->
            <ul
              :class="[
                'flex flex-col lg:flex-row lg:gap-10 bg-black lg:bg-transparent absolute lg:static top-16 lg:top-auto left-0 w-full lg:w-auto z-50 transition-all duration-300',
                showMenu ? 'opacity-100 visible' : 'opacity-0 invisible lg:visible',
              ]"
            >
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <NuxtLink to="/" class="block py-2 lg:py-0">Home</NuxtLink>
              </li>
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <NuxtLink to="/experience" class="block py-2 lg:py-0"
                  >Work Experience</NuxtLink
                >
              </li>
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <NuxtLink to="/projects" class="block py-2 lg:py-0">Projects</NuxtLink>
              </li>
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <a
                  href="https://drive.google.com/file/d/1Moj5pPJDZtKwaVwtGMm0iKZiz_rSgHB_/view?usp=sharing"
                  target="_blank"
                  class="block py-2 lg:py-0"
                  >Resume</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div class="container mx-auto max-w-screen-md px-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup>
const globalStore = useGlobalStore();

const showMenu = ref(false);

const getActiveAndLightMode = computed(() => {
  return;
});

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

function setLightMode() {
  globalStore.setLightMode();
}
</script>

<style lang="css" scoped>
.not-active {
  color: #8c8c8c;
}

.btn-light:hover {
  color: #000; /* Light mode hover color */
  transition: 0.2s;
}

.btn-dark:hover {
  color: #f0f0f0; /* Dark mode hover color */
  transition: 0.2s;
}

.router-link-exact-active {
  color: #ffffff;
  font-weight: bold;
}

/* Prevent hover styles for active links */
.router-link-exact-active:hover {
  color: #ffffff; /* Keep the active link style */
}

@media (min-width: 1536px) {
  #nav-header {
    max-width: 1280px;
  }
}
</style>
