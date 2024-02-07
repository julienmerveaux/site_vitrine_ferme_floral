import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from "@/stores/index.js";

const app = createApp(App)
    .use(store)

app.use(createPinia())
app.use(router)

app.mount('#app')
