<template>
  <div id="app-exchange">
    <div class="wrapper">
      <h1>Currency Exchange Calculator</h1>
      <p>Choose currency and enter amount!</p>

      <div class="converter-body">
        <div class="currency-left">
          <input type="number" v-model="inputOne" :input="getCurrency()" />
          <select v-model="currencyOne" :onchange="getCurrency()">
            <option value="PLN">PLN</option>
            <option value="USD" selected>USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
        <button class="swap" @click="swapCurrency">
          <box-icon
            name="transfer-alt"
            color="#ffffff"
            size="38px"
            animation="tada-hover"
          ></box-icon>
        </button>
        <div class="currency-right">
          <input type="number" :value="inputTwo" disabled />
          <select v-model="currencyTwo">
            <option value="PLN" selected>PLN</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
            <option value="JPY">JPY</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
      </div>
      <p class="rate-info">{{ rateInfo }}</p>
    </div>
    <currency-table></currency-table>
  </div>
</template>

<script>
import CurrencyTable from './components/CurrencyTable.vue';

export default {
  name: 'AppExchange',
  components: {
    CurrencyTable,
  },
  data() {
    return {
      rate: '',
      currencyOne: 'EUR',
      currencyTwo: 'PLN',
      inputOne: '1',
      inputTwo: '',
      rateInfo: '',
    };
  },

  computed: {
    apiLink() {
      return `https://api.frankfurter.app/latest?amount=1&from=${this.currencyOne}&to=${this.currencyTwo}`;
    },
  },

  methods: {
    getCurrency() {
      if (this.currencyOne === this.currencyTwo) return (this.inputTwo = 1);
      this.axios.get(this.apiLink).then((result) => {
        this.rate = result.data.rates[`${this.currencyTwo}`];

        this.inputTwo = (
          parseFloat(this.rate) * parseFloat(this.inputOne)
        ).toFixed(2);

        this.rateInfo = `1 ${this.currencyOne} = ${parseFloat(
          this.rate
        ).toFixed(4)} ${this.currencyTwo}`;
      });
    },

    swapCurrency() {
      const temp = this.currencyOne;
      this.currencyOne = this.currencyTwo;
      this.currencyTwo = temp;
      this.getCurrency();
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

* {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
#app-exchange {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  // background-color: #29303b;

  .wrapper {
    padding: 50px;
    width: 50vw;
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
      margin-bottom: 50px;
      font-size: 26px;
      font-weight: 200;
    }

    .rate-info {
      margin-top: 30px;
      margin-bottom: 0;
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
        padding: 6px 50px 4px;
        background-image: linear-gradient(45deg, #c35e00, #6d6d6d);
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
