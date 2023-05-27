import './assets/main.css'
import { Amplify } from 'aws-amplify'
import awsmobile from './aws-exports'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

Amplify.configure(awsmobile)

const app = createApp(App)

app.use(router)

app.mount('#app')
