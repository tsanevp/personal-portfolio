<template>
  <div class="timeline">
    <div class="row right-side" v-for="item in items" :key="item.id">
      <div class="timeline-pin">
        <div class="pin-head"></div>
      </div>
      <div class="content-card">
        <div>
          {{ item.heading }}
        </div>
        <div>
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  width: 100%;
  padding: 1rem;
  color: black;
  display: flex;
  flex-direction: column;
  position: relative;
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}

.right-side {
  border-left: 1px solid #7ba;
  position: relative; /* To position pin correctly */
}

.content-card {
  border-radius: 1rem;
  margin-left: 50px;
  padding: 2rem;
  background: #258;
  color: white;
  position: relative;
}

.timeline-pin {
    position: absolute;
    left: -0.55rem;
    top: -0.1rem;
}

.pin-head {
  width: 1rem;
  height: 1rem;
  border: 4px black solid;
  border-radius: 100rem;
  background: #ffff;
}
</style>

<script setup lang="ts">
const items = [
  {
    id: "abc",
    side: "right",
    heading: "whenever",
    date: "Friday", // format this?
    text: "hi", // use markdown to be fancy
  },
  {
    id: "def",
    side: "right",
    heading: "whenever",
    date: "Yesterday", // format this?
    text: "hi", // use markdown to be fancy
  },
  {
    id: "ghi",
    side: "right",
    heading: "wheneeeeeeever",
    date: "Tomorrow", // format this?
    text: "hi", // use markdown to be fancy
  },
];
</script>
