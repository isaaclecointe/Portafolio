import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/router'
import nombreSvg from './components/nombreSvg.vue'





const app = createApp(App)

app.component('nombre-svg', nombreSvg);

app.use(router);

app.mount('#app');




