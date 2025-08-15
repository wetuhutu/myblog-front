import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router';
import artcilcepage from '@/views/articlePage.vue';
import home from '@/views/home.vue';

const routes = [
    {
        path: '/',
        component:home
    },
    {
        path: '/article',
        component: artcilcepage,
    }
]

const router = createRouter({
    history: createWebHistory(),    
    routes
});

export default router;