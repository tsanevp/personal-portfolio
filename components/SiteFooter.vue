<template>
  <footer class="w-full flex justify-center items-center py-10">
    <div class="flex items-center space-x-5">
      <div class="flex items-center space-x-1">
        <Icon name="tdesign:copyright" size="16" class="text-2xl" />
        <p>{{ new Date().getFullYear() }}</p>
        <p class="green">Peter Tsanev</p>
      </div>

      <div class="h-6 border-l border-gray-400"></div>

      <Socials :div-size="2" div-class="space-x-3" />
    </div>
  </footer>
</template>

<style>
.green {
  color: var(--secondary-color-green);
}
</style>
