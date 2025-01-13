<template>
  <div>
    <header>
      <nav
        id="nav-header"
        class="container mx-auto p-4 flex justify-between center-content text-xl"
      >
        <NuxtLink to="/" class="font-bold text-2xl">Peter Tsanev</NuxtLink>

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
                to="/experiences"
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
          <ToggleVue3
            onIcon="tdesign:mode-dark"
            offIcon="entypo:light-up"
            @click="setLightMode()"
            v-model="selected"
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

    <div class="container mx-auto max-w-screen-md px-auto p-4 border-b border-[#8c8c8c]">
      <slot />
    </div>

    <footer class="w-full flex justify-center items-center py-10 ">
      <div class="flex items-center space-x-5">
        <!-- Left Section -->
        <div class="flex items-center space-x-1">
          <Icon name="tdesign:copyright" size="16" class="text-2xl green" />
          <p class="green">{{ new Date().getFullYear() }}</p>
          <p>Peter Tsanev</p>
        </div>

        <!-- Divider -->
        <div class="h-6 border-l border-gray-400"></div>

        <!-- Right Section -->
        <div id="socials" class="flex items-center space-x-3 text-2xl">
          <a href="https://github.com/tsanevp" target="_blank" class="icon-link">
            <Icon name="mdi:github" size="16" :style="{ color: color }" />
          </a>
          <a
            href="https://www.linkedin.com/in/tsanevpeter/"
            target="_blank"
            class="icon-link"
          >
            <Icon name="ri:linkedin-fill" size="16" :style="{ color: color }" />
          </a>
          <a href="mailto:petertsanev7@gmail.com" target="_blank" class="icon-link">
            <Icon name="ic:outline-email" size="16" :style="{ color: color }" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const globalStore = useGlobalStore();

const showMenu = ref(false);
const selected = ref(false);
const toggleState = ref(false);

const getActiveAndLightMode = computed(() => {
  return;
});

function toggleMenu() {
  showMenu.value = !showMenu.value;
}

function setLightMode() {
  globalStore.setLightMode();

  if (globalStore.lightMode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}
</script>

<style lang="css" scoped>
ul > li:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}
.not-active {
  color: #8c8c8c;
}

.btn-light:hover {
  color: #40a9ff;
  transition: 0.5s;
}

.btn-dark:hover {
  color: var(--secondary-color);
  transition: 0.5s;
}

.router-link-exact-active {
  color: #ffffff;
}

/* Prevent hover styles for active links */
.router-link-exact-active:hover {
  color: var(--secondary-color);
  transition: 0.5s;
}

@media (min-width: 1536px) {
  #nav-header {
    max-width: 1280px;
  }
}

.green {
  color: var(--secondary-color);
}

.text-reset {
  color: inherit;
}

#socials > a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
}

#socials > a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}
</style>
