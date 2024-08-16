
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const VueApp=createApp(App)

VueApp.use(router)

VueApp.mount('#app')
