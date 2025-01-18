<template>
  <div class="row" :class="!isLast ? 'element pb-1' : 'vertical-line-transparent'">
    <div class="timeline-pin">
      <div class="pin-head"></div>
    </div>
    <div class="ml-8 content-card">
      <div class="mb-2">
        <h3 class="secondary-color-green">{{ education.schoolName }}</h3>
        <div class="text-lg font-bold">
          {{ education.degree }},
          <span class="secondary-color-green font-normal text-base"
            >{{ education.gpa }} GPA</span
          >
        </div>
        <div class="text-sm text-secondary">
          {{
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
            }).format(new Date(education.startDate))
          }}
          -
          {{
            new Intl.DateTimeFormat("en-US", {
              month: "short",
              year: "numeric",
            }).format(new Date(education.endDate))
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<
<script lang="ts" setup>
defineProps({
  education: {
    type: Object,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.row {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
}

.element {
  border-left: 3px solid #bfbfbf;
}

.content-card {
  position: relative;
  top: -2rem;
}

.vertical-line-transparent {
  border-left: 3px solid transparent;
  position: relative;
}

.timeline-pin {
  position: absolute;
  left: -0.59rem;
  top: -0.01rem;
}

.pin-head {
  width: 1rem;
  height: 1rem;
  border: 4px var(--text-color) solid;
  border-radius: 100rem;
  background: var(--secondary-color-green);
}
</style>
