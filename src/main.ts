import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { setDirective } from '@/directive/index';
// 自定义指令


const app = createApp(App);
setDirective(app);
app.use(router);
app.mount('#app');
