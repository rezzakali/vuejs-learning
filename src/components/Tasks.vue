<script setup>
import { onMounted, ref } from 'vue';

const newTask = ref('');

const tasks = ref(['Hello World!']);

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

const addNewTask = () => {
  if (newTask.value !== '') {
    tasks.value = [...tasks.value, newTask.value];
    newTask.value = '';
  }
};

const editTask = (index) => {
  newTask.value = tasks.value[index];
};

onMounted(async () => {
  try {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=2'
    );
    const data = await res.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log('🚀 ~ onMounted ~ error:', error);
  }
});
</script>

<template>
  <form @submit.prevent="addNewTask" class="flex items-center gap-x-2">
    <label for="addTask">Add Task</label>
    <input
      v-model="newTask"
      id="addTask"
      placeholder="add task"
      class="border border-teal-500 pl-2 rounded"
    />
    <button type="submit" class="px-1 rounded text-white bg-teal-500 text-sm">
      add new task
    </button>
  </form>

  <div v-for="(task, index) in tasks" :key="index" class="my-2">
    {{ task }}
    <button @click="deleteTask(index)" class="bg-red-300 px-1 rounded">
      delete
    </button>
    <button @click="editTask(index)" class="bg-teal-500 px-1 rounded ml-2">
      edit
    </button>
  </div>
</template>

<style scoped></style>
