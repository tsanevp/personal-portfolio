<template>
    <div>
        <div id="section-about-me" class="card mb-5">
            <h1 class="font-bold">Peter Tsanev</h1>
            <p>Location: Seattle, WA</p>
            <p>Full-stack Developer</p>
        </div>

        <div id="section-my-stack" class="card mb-5">
            <h2>Stack</h2>
            <div>
                <ul class="flex">
                    <li>React</li>
                    <li>Vue</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>

        <div id="section-work-experience" class="mb-5">
            <div class="flex justify-between">
                <h2 class="font-bold">Work Experience</h2>
                <NuxtLink to="/WorkExperience">
                    <p>See More</p>
                </NuxtLink>
            </div>
            <div class="card">
                <h3>Project Title</h3>
                <ul class="flex">
                    <li>React</li>
                    <li>Vue</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
                <p>Project description</p>
                <button class="btn">Learn More</button>
            </div>
        </div>

        <div id="section-projects" class="mb-5">
            <div class="flex justify-between">
                <h2 class="font-bold">Projects</h2>
                <NuxtLink to="/Projects">
                    <p>See More</p>
                </NuxtLink>
            </div>
            <div class="card">
                <h3>Project Title</h3>
                <ul class="flex">
                    <li>React</li>
                    <li>Vue</li>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
                <p>Project description</p>
                <button class="btn">Learn More</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>
