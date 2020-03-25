import './utilities/rem.js';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Global from './constants/Global';

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = Global;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
