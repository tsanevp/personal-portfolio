<template>
  <div>
    <header>
      <nav
        id="nav-header"
        class="md:container mx-auto p-4 flex items-center justify-between relative text-xl"
      >
        <NuxtLink to="/" class="font-bold text-2xl mr-auto">Peter Tsanev</NuxtLink>

        <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <ul class="flex gap-10 not-active h-full">
            <li>
              <NuxtLink
                to="/"
                :class="{ 'router-link-exact-active': $route.path === '/' }"
                class="flex h-full content-center flex-wrap"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/stack"
                :class="{ 'router-link-exact-active': $route.path === '/stack' }"
                class="flex h-full content-center flex-wrap"
              >
                Stack
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/experiences"
                :class="{ 'router-link-exact-active': $route.path === '/experiences' }"
                class="flex h-full content-center flex-wrap"
              >
                Experience
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projects"
                :class="{ 'router-link-exact-active': $route.path === '/projects' }"
                class="flex h-full content-center flex-wrap"
              >
                Projects
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Moj5pPJDZtKwaVwtGMm0iKZiz_rSgHB_/view?usp=sharing"
                target="_blank"
                class="flex h-full content-center flex-wrap"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div class="flex ml-auto">
          <ToggleVue3
            onIcon="tdesign:mode-dark"
            offIcon="entypo:light-up"
            @click="setLightMode()"
            v-model="selected"
          />

          <!-- Hamburger Icon -->
          <div class="ml-4 lg:hidden flex h-full justify-center items-center">
            <Icon
              name="solar:hamburger-menu-outline"
              class="text-3xl"
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
                <NuxtLink
                  to="/"
                  class="block py-2 lg:py-0"
                  :class="{
                    'router-link-exact-active': $route.path === '/',
                    'green': showMenu && $route.path === '/',
                  }"
                  >Home</NuxtLink
                >
              </li>
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <NuxtLink
                  to="/stack"
                  class="block py-2 lg:py-0"
                  :class="{
                    'router-link-exact-active': $route.path === '/stack',
                    'green': showMenu && $route.path === '/stack',
                  }"
                  >Stack</NuxtLink
                >
              </li>
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <NuxtLink
                  to="/experiences"
                  class="block py-2 lg:py-0"
                  :class="{
                    'router-link-exact-active': $route.path === '/experiences',
                    'green': showMenu && $route.path === '/experiences',
                  }"
                  >Experience</NuxtLink
                >
              </li>
              <li class="p-2 lg:p-0 text-center lg:text-left">
                <NuxtLink
                  to="/projects"
                  class="block py-2 lg:py-0"
                  :class="{
                    'router-link-exact-active': $route.path === '/projects',
                    'green': showMenu && $route.path === '/projects',
                  }"
                  >Projects</NuxtLink
                >
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

    <footer class="w-full flex justify-center items-center py-10">
      <div class="flex items-center space-x-5">
        <div class="flex items-center space-x-1">
          <Icon name="tdesign:copyright" size="16" class="text-2xl" />
          <p>{{ new Date().getFullYear() }}</p>
          <p class="green">Peter Tsanev</p>
        </div>

        <div class="h-6 border-l border-gray-400"></div>

        <Socials div-size="2" div-class="space-x-3" />
      </div>
    </footer>
  </div>
</template>

<script setup>
const globalStore = useGlobalStore();

const showMenu = ref(false);
const selected = ref(false);

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
ul > li {
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

ul > li:hover {
  transform: scale(1.1);
  color: var(--seoncdary-color-green);
}

.not-active {
  color: #8c8c8c;
}

.router-link-exact-active {
  color: var(--text-color);
}

.green {
  color: var(--seoncdary-color-green);
}
</style>
