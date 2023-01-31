import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

// import './assets/main.css'
const pinia = createPinia()
const app = createApp(App)

app.use(router, axios)
app.use(pinia)

app.mount('#app')
