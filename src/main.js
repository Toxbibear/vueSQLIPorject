import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

const pinia = createPinia()
const app = createApp(App)
const router = createRouter({
    history: createWebHistory(),
    routes,
})
app.use(pinia)
app.use(router)
app.mount('#app')