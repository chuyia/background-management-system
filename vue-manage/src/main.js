import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import http from 'axios'
import '../api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$http = http
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
