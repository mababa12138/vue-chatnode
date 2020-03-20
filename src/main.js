import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import VueChatScroll from 'vue-chat-scroll'
import ElementUI from 'element-ui'

import App from './App.vue'
import router from './router'
import store from './store/index'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/loading.min.css'
import './assets/css/ldbtn.min.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.use(BootstrapVue)
Vue.use(VueChatScroll)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')