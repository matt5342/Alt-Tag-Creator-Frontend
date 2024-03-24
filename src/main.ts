import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import * as bootstrap from 'bootstrap'

import router from './router'
import directives from './shared/directives'

const app = createApp(App)

app.use(directives)

app.use(createPinia())

app.use(router);

app.mount('#app')
