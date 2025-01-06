<template>
    <div class="flex">
        <Icon :name="iconName" :style="{ color: color, alignSelf: 'center' }" class="mr-2" />
        <p :style="{ color: color }">{{ iconLabel }}</p>
    </div>
</template>

<script setup>
// Access the global store
const globalStore = useGlobalStore();

// Props
const { iconName, iconLabel } = defineProps(['iconName', 'iconLabel', 'iconColor'])

// Reactively compute icon & label color
const color = computed(() => (globalStore.lightMode ? 'black' : 'white'));
</script>