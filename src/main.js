import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
// The createApp function creates a new Vue instance and mounts it to the #app element in the DOM.