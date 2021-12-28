import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { title: 'Acceuil | Entreprise' },
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = <string>to.meta.title;
	next();
});

export default router;
