<template>
    <NuxtLink :to="`${path}`" class="btn">
        <p>Learn More</p>
        <Icon name="material-symbols:arrow-forward-rounded"  style="align-self: center;" class="ml-2 text-base" />
    </NuxtLink>
</template>

<script setup>
const globalStore = useGlobalStore();
const { path } = defineProps(['path']);

const color = computed(() => (globalStore.lightMode ? "black" : "white"));

</script>

<style scoped>
    .btn {
        border: 1px solid white;
    }

    .btn:hover {
        background-color: white;
        transition: .5s;
        color: black;
        border: 1px solid black;
    }
</style>