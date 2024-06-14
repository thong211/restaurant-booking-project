// import './assets/main.css'
import './index.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { Button, message } from 'ant-design-vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const vuetify = createVuetify({
  components,
  directives,
})
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(bootstrap)
app.use(Button)
app.use(Antd)
app.mount('#app')
