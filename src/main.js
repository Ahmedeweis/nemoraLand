import { createApp } from 'vue'
import { createPinia } from 'pinia'   // ✅ أضف السطر ده
import './style.css'
import App from './App.vue'
import Toast, { POSITION } from "vue-toastification"
import "vue-toastification/dist/index.css"
import router from './router'
import { RouterLink } from 'vue-router'

const app = createApp(App)

// Alias NuxtLink to RouterLink for migration compatibility
app.component('NuxtLink', RouterLink)

app.use(createPinia())
app.use(router)

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
})
app.mount('#app')
