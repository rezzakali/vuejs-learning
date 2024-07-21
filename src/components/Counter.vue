<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
const decrement = () => {
  if (count.value === 0) return;
  count.value--;
};
</script>

<template>
  <h1>Counter component</h1>
  <p>{{ count }}</p>
  <button @click="increment" class="bg-teal-500 rounded p-1 text-white text-sm">
    increment
  </button>
  <button
    @click="decrement"
    class="bg-teal-500 rounded p-1 ml-2 text-white text-sm"
  >
    decrement
  </button>
</template>
