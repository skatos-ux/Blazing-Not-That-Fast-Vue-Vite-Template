import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { injectionKey, store } from './store'

import App from './App.vue'
import router from './router/index'

library.add(faPhone)

const app = createApp(App)
app.use(router)
app.use(store, injectionKey)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
