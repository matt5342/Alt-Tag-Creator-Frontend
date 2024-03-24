import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: "Home",
        component: () => import('../components/home/HomePage.vue')
    },
    {
        path: '/open_ai',
        name: "ImageAnalysis",
        component: () => import('../components/open_ai/ImageAnalysis.vue')
    },
    ]
});