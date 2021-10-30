import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'boxicons';

import store from './store/index.js';

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
