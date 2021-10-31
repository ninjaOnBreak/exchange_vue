import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'boxicons';

import CurrencyTable from './components/CurrencyTable.vue';

import store from './store';

Vue.use(VueAxios, axios);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');

export default {
  install(Vue, { options }) {
    if (!options || !options.store) {
      throw new Error('Please initialise plugin with a Vuex store.');
    }
    options.store.registerModule('CurrencyModule', store);

    Vue.component('currency-table', CurrencyTable);
  },
};
