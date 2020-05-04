import Vue from 'vue'
import VueChatScroll from 'vue-chat-scroll'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store/index'

import './assets/css/loading.min.css'
import './assets/css/ldbtn.min.css'
import 'element-ui/lib/theme-chalk/index.css'

import tim from './tim'
import TIM from 'tim-js-sdk'

Vue.use(VueChatScroll)
Vue.use(ElementUI)

window.tim = tim
window.TIM = TIM

Vue.prototype.tim = tim
Vue.prototype.TIM = TIM

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')