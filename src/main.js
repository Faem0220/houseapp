import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;
Vue.prototype.$url = "http://127.0.0.1:8000/";

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
