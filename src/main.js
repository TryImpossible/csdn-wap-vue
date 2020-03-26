import './utilities/rem.js';
import './utilities/vconsole.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Global from './constants/Global';
import HttpClient from './network/HttpClient';

Vue.config.productionTip = false;
Vue.prototype.$global = Global;
Vue.prototype.$http = HttpClient;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
