import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { setDirective } from '@/directive/index';
import { createPinia } from 'pinia';

const app = createApp(App);
// 自定义指令
setDirective(app);
app.use(createPinia());
app.use(router);
app.mount('#app');
