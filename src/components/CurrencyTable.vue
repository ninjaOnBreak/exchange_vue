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
export default {
  computed: {
    EURUSD() {
      return this.$store.getters['CurrencyModule/fixedEURUSD'];
    },

    USDJPY() {
      return this.$store.getters['CurrencyModule/fixedUSDJPY'];
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

  mounted() {
    this.$store.dispatch('CurrencyModule/getEURUSD');
    this.$store.dispatch('CurrencyModule/getUSDJPY');
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
}
</style>
