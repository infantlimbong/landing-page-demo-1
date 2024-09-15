import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'boxicons/css/boxicons.min.css'
import VueScrollTo from 'vue-scrollto'

AOS.init()
const app = createApp(App)

app.use(VueScrollTo, {
    duration: 300,
    easing: 'ease-in',
    // offset: 200,
})

app.mount('#app')
