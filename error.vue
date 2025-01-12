<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-4xl">Oh no! Sorry....</p>
        <p class="mt-7 text-xl">I'm still working on this page. Check back soon!</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClick">Go Home...</button>
    </div>
</template>

<script setup>
const { error } = defineProps(['error']);

const handleClick = () => clearError({ redirect: '/' });
</script>

<style scoped>
</style>