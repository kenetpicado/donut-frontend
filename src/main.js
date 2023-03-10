import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(LoadingPlugin).mount('#app')
