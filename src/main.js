import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from "@/stores/index.js";

const app = createApp(App)
    .use(store,{
        AIRTABLE_API_KEY: import.meta.env.AIRTABLE_API_KEY,
        SENDGRID_API_KEY: import.meta.env.SENDGRID_API_KEY,
        AIRTABLE_BASE:import.meta.env.AIRTABLE_BASE,
    })

    app.use(store,{
        AIRTABLE_API_KEY: import.meta.env.AIRTABLE_API_KEY,
        SENDGRID_API_KEY: import.meta.env.SENDGRID_API_KEY,
        AIRTABLE_BASE: import.meta.env.AIRTABLE_BASE,
    })
app.use(createPinia())
app.use(router)

app.mount('#app')
