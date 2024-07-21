<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <hr />
  <div class="p-2 bg-teal-100 rounded shadow flex items-center justify-between">
    <RouterLink to="/" class="text-xs">Learning Vuejs</RouterLink>
    <div class="gap-2 flex items-center">
      <RouterLink to="/" class="text-xs">Counter</RouterLink>
      <RouterLink to="/todo-list" class="text-xs">Todo List</RouterLink>
    </div>
  </div>
  <main class="m-2">
    <router-view></router-view>
  </main>
</template>
