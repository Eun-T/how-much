import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue';
import Statistic from '@/pages/Statistic.vue';
import Travel from '@/pages/Travel.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/statistic', component: Statistic },
    { path: '/travel', component: Travel },
  ],
});

export default router;
