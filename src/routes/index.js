import Counter from '@/components/Counter.vue';
import Tasks from '@/components/Tasks.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/todo-list',
    name: 'Todo List',
    component: Tasks,
  },
  {
    path: '/',
    name: 'Counter',
    component: Counter,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
