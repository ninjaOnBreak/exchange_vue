import axios from 'axios';

export default {
  state: {
    EURUSD: '',
    USDJPY: '',
    GBPUSD: '',
    CNYUSD: '',
    USDPLN: '',
    EURPLN: '',
    CHFPLN: '',
    GBPPLN: '',
  },

  actions: {
    getEURUSD({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=EUR&to=USD')
        .then((result) => {
          commit('setEURUSDrate', result.data);
        });
    },

    getUSDJPY({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=USD&to=JPY')
        .then((result) => {
          commit('setUSDJPYrate', result.data);
        });
    },

    getGBPUSD({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=GBP&to=USD')
        .then((result) => {
          commit('setGBPUSDrate', result.data);
        });
    },

    getCNYUSD({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=CNY&to=USD')
        .then((result) => {
          commit('setCNYUSDrate', result.data);
        });
    },

    getUSDPLN({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=USD&to=PLN')
        .then((result) => {
          commit('setUSDPLNrate', result.data);
        });
    },

    getEURPLN({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=EUR&to=PLN')
        .then((result) => {
          commit('setEURPLNrate', result.data);
        });
    },

    getCHFPLN({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=CHF&to=PLN')
        .then((result) => {
          commit('setCHFPLNrate', result.data);
        });
    },

    getGBPPLN({ commit }) {
      axios
        .get('https://api.frankfurter.app/latest?amount=1&from=GBP&to=PLN')
        .then((result) => {
          commit('setGBPPLNrate', result.data);
        });
    },
  },

  mutations: {
    setEURUSDrate(state, data) {
      state.EURUSD = data.rates.USD;
    },

    setUSDJPYrate(state, data) {
      state.USDJPY = data.rates.JPY;
    },

    setGBPUSDrate(state, data) {
      state.GBPUSD = data.rates.USD;
    },

    setCNYUSDrate(state, data) {
      state.CNYUSD = data.rates.USD;
    },

    setUSDPLNrate(state, data) {
      state.USDPLN = data.rates.PLN;
    },

    setEURPLNrate(state, data) {
      state.EURPLN = data.rates.PLN;
    },

    setCHFPLNrate(state, data) {
      state.CHFPLN = data.rates.PLN;
    },

    setGBPPLNrate(state, data) {
      state.GBPPLN = data.rates.PLN;
    },
  },

  getters: {
    fixedEURUSD(state) {
      return parseFloat(state.EURUSD).toFixed(4);
    },

    fixedUSDJPY(state) {
      return parseFloat(state.USDJPY).toFixed(2);
    },

    fixedGBPUSD(state) {
      return parseFloat(state.GBPUSD).toFixed(4);
    },

    fixedCNYUSD(state) {
      return parseFloat(state.CNYUSD).toFixed(4);
    },

    fixedUSDPLN(state) {
      return parseFloat(state.USDPLN).toFixed(4);
    },

    fixedEURPLN(state) {
      return parseFloat(state.EURPLN).toFixed(4);
    },

    fixedCHFPLN(state) {
      return parseFloat(state.CHFPLN).toFixed(4);
    },

    fixedGBPPLN(state) {
      return parseFloat(state.GBPPLN).toFixed(4);
    },
  },
};
