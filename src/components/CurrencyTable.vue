<template>
  <div id="currency-table">
    <div class="table-wrapper">
      <p>Najważniejsze kursy</p>
      <p class="rate-info">
        EURUSD
        <box-icon name="trending-down" color="#ff0000" size="32px"></box-icon>
        {{ EURUSD }}
      </p>
      <p class="rate-info">
        USDJPY
        <box-icon name="trending-up" color="#00ff00" size="32px"></box-icon>
        {{ USDJPY }}
      </p>
      <p class="rate-info">
        GBPUSD
        <box-icon name="trending-down" color="#ff0000" size="32px"></box-icon>
        {{ GBPUSD }}
      </p>
      <p class="rate-info">
        CNYUSD
        <box-icon name="trending-up" color="#00ff00" size="32px"></box-icon>
        {{ CNYUSD }}
      </p>
      <p class="rate-info">
        USDPLN
        <box-icon name="trending-down" color="#ff0000" size="32px"></box-icon>
        {{ USDPLN }}
      </p>
      <p class="rate-info">
        EURPLN
        <box-icon name="trending-up" color="#00ff00" size="32px"></box-icon>
        {{ EURPLN }}
      </p>
      <p class="rate-info">
        CHFPLN
        <box-icon name="trending-down" color="#ff0000" size="32px"></box-icon>
        {{ CHFPLN }}
      </p>
      <p class="rate-info">
        GBPPLN
        <box-icon name="trending-up" color="#00ff00" size="32px"></box-icon>
        {{ GBPPLN }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    EURUSD() {
      return this.$store.getters['CurrencyModule/fixedEURUSD'];
    },

    USDJPY() {
      return this.$store.getters.fixedUSDJPY;
    },

    GBPUSD() {
      return this.$store.getters.fixedGBPUSD;
    },

    CNYUSD() {
      return this.$store.getters.fixedCNYUSD;
    },

    USDPLN() {
      return this.$store.getters.fixedUSDPLN;
    },

    EURPLN() {
      return this.$store.getters.fixedEURPLN;
    },

    CHFPLN() {
      return this.$store.getters.fixedCHFPLN;
    },

    GBPPLN() {
      return this.$store.getters.fixedGBPPLN;
    },
  },

  // methods: {
  //   ...mapActions(['getEURUSD']),
  // },

  mounted() {
    this.$store.dispatch('CurrencyModule/getEURUSD');
    this.$store.dispatch('getUSDJPY');
    this.$store.dispatch('getGBPUSD');
    this.$store.dispatch('getCNYUSD');
    this.$store.dispatch('getUSDPLN');
    this.$store.dispatch('getEURPLN');
    this.$store.dispatch('getCHFPLN');
    this.$store.dispatch('getGBPPLN');
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

* {
  margin: 0;
}

#currency-table {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
  background-color: #29303b;
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #29303b;

  .table-wrapper {
    padding: 50px;
    width: 20vw;
    margin: auto 20px;
    background-image: linear-gradient(#3f4b59, #333d46);
    color: #fff;
    text-align: center;
    border: 1px solid #1c232d;
    border-radius: 15px;
    box-shadow: 0 0 15px #1c232d;

    h1 {
      margin-bottom: 10px;
      font-size: 36px;
    }

    p {
      // margin: 40px 0;
      font-size: 30px;
      font-weight: 400;
    }

    .rate-info {
      font-size: 28px;
      margin: 40px 0;
      font-size: 26px;
      font-weight: 200;

      box-icon {
        vertical-align: bottom;
      }
    }

    .converter-body {
      display: flex;
      justify-content: center;
      align-items: center;

      .currency-left,
      .currency-right {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      input {
        margin-bottom: 10px;
        width: 100%;
        font-size: 60px;
      }

      input,
      select {
        color: #fff;
        border: none;
        background: none;
        text-align: center;
      }

      select {
        padding: 10px 20px;
        font-size: 36px;
        cursor: pointer;
      }

      input:focus,
      select:focus {
        outline: none;
        color: rgb(67, 171, 255);
      }

      option {
        color: #333;
      }

      .swap {
        align-self: flex-end;
        margin: 5px;
        padding: 5px 50px;
        background-image: linear-gradient(45deg, #c35e00, #6d6d6d);
        font-size: 30px;
        text-transform: uppercase;
        border: none;
        border-radius: 15px;
        color: #fff;
        cursor: pointer;
      }

      .swap:focus {
        outline: none;
        background-image: linear-gradient(45deg, #aa5200, #1fc06a);
      }
    }
  }
}
</style>
