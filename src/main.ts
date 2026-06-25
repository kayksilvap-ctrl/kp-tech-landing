import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './styles/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(MotionPlugin)

app.mount('#app')