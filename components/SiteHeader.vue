<template>
  <header>
    <nav
      id="nav-header"
      class="md:container mx-auto p-4 flex items-center justify-between relative text-lg"
    >
      <NuxtLink id="header-name" to="/" class="font-bold mr-auto">Peter Tsanev</NuxtLink>

      <div class="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
        <ul class="flex gap-10 not-active h-full">
          <li v-for="link in headerLinks">
            <NuxtLink
              :to="link.path"
              :class="{ 'router-link-exact-active': $route.path === `${link.path}` }"
              class="flex h-full content-center flex-wrap"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
          <li>
            <a
              :href="resumeLink"
              target="_blank"
              class="flex h-full content-center flex-wrap"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div class="flex ml-auto">
        <SharedToggleButton
          onIcon="tdesign:mode-dark"
          offIcon="entypo:light-up"
          @click="setLightMode()"
          v-model="toggleSelected"
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
            class="flex flex-col bg-black rounded-lg absolute top-16 right-0 w-1/2 z-50 transition-all duration-300 text-white font-medium"
            :class="showMenu ? 'opacity-100 visible' : 'opacity-0 invisible lg:visible'"
            ref="dropdown"
          >
            <li v-for="link in headerLinks" class="p-2 lg:p-0 text-center lg:text-left">
              <NuxtLink
                :to="link.path"
                class="block py-2 lg:py-0"
                :class="{
                  'router-link-exact-active': $route.path === `${link.path}`,
                  green: showMenu && $route.path === `${link.path}`,
                }"
                >{{ link.label }}
              </NuxtLink>
            </li>
            <li class="p-2 lg:p-0 text-center lg:text-left">
              <a :href="resumeLink" target="_blank" class="block py-2 lg:py-0">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const resumeLink =
  "https://drive.google.com/file/d/1MHf0K90xZoodkEMB0PtPo4LmMZKlamU_/view?usp=sharing";
const headerLinks = [
  { path: "/", label: "Home" },
  { path: "/experiences", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/stack", label: "Stack" },
];

const toggleSelected = ref(false);
const showMenu = ref(false);

// Close dropdown user clicks outside div
const dropdown = ref<HTMLElement | null>(null);
const handleClickOutside = (event: Event) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    showMenu.value = false;
  }
};

// Close dropdown user navigated to new page
const route = useRoute();
watch(route, () => {
  showMenu.value = false;
});

function toggleMenu(event: Event) {
  event.stopPropagation();
  showMenu.value = !showMenu.value;
}

// Sets the lightmode of the entire site
const globalStore = useGlobalStore();
function setLightMode() {
  globalStore.setLightMode();

  if (globalStore.lightMode) {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="css" scoped>
ul > li {
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

ul > li:hover {
  transform: scale(1.1);
  color: var(--secondary-color-green);
}

.not-active {
  color: #8c8c8c;
}

.router-link-exact-active {
  color: var(--text-color);
  text-decoration: underline var(--secondary-color-green) 2px;
  text-underline-offset: 0.5rem;
}

#header-name {
  text-decoration: none;
}

.green {
  color: var(--secondary-color-green);
}
</style>
