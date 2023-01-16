import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import inputElement from '@/components/InputElement.vue';

createApp(App).component('x-input', inputElement).use(store).use(router).mount('#app');
