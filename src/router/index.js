import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Reservation from '../views/Reservation.vue';
import Confirmation from '../views/Confirmation.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: Confirmation
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;