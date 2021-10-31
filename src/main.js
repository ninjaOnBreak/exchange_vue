import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'boxicons';

import store from './store';

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');

export default {
  install(Vue, { store }) {
    store.registerModule('CurrencyModule', store);
  },
};
