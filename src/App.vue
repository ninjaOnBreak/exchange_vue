<template>
  <div id="app">
    <div class="wrapper">
      <h1>Exchange Rate App</h1>
      <p>Sprawdź aktualne kursy walut!</p>

      <div class="converter-body">
        <div class="section-left">
          <input type="number" v-model="inputOne" :input="getCurrency()" />
          <select v-model="currencyOne" :onchange="getCurrency()">
            <option value="PLN">PLN</option>
            <option value="USD" selected>USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
        <button class="swap" @click="swapCurrency">SWAP</button>
        <div class="section-right">
          <input type="number" :value="inputTwo" disabled />
          <select v-model="currencyTwo" disabled>
            <option value="PLN" selected>PLN</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
            <option value="CHF">CHF</option>
          </select>
        </div>
      </div>
      <p class="rate-info">{{ rateInfo }}</p>
    </div>
    <div
      id="target"
      class="control-section; position:relative"
      style="height:350px;"
    >
      <!-- Render Button to open the Dialog -->
      <ejs-button id="dlgbtn" v-on:click.native="btnClick">Open</ejs-button>
      <!-- Render Dialog -->
      <ejs-dialog
        ref="footerDialog"
        :header="header"
        :target="target"
        :width="width"
        :buttons="buttons"
        :content="content"
        :open="dlgOpen"
        :close="dlgClose"
      >
      </ejs-dialog>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(DialogPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      rate: '',
      currencyOne: 'USD',
      currencyTwo: 'PLN',
      inputOne: '1',
      inputTwo: '',
      rateInfo: '',

      target: '#target',
      width: '335px',
      header: 'Dialog',
      content: 'This is a Dialog with button and primary button.',
      buttons: [
        {
          click: this.dlgButtonClick,
          buttonModel: { content: 'OK', isPrimary: true },
        },
        { click: this.dlgButtonClick, buttonModel: { content: 'Cancel' } },
      ],
    };
  },

  computed: {
    apiLink() {
      return `https://api.frankfurter.app/latest?amount=1&from=${this.currencyOne}&to=${this.currencyTwo}`;
    },
  },

  methods: {
    getCurrency() {
      this.axios.get(this.apiLink).then((result) => {
        console.log(result);
        console.log(this.inputOne);

        this.rate = result.data.rates.PLN;
        console.log(this.rate);

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

    btnClick: function() {
      this.$refs.footerDialog.show();
    },
    dlgClose: function() {
      document.getElementById('dlgbtn').style.display = '';
    },
    dlgOpen: function() {
      document.getElementById('dlgbtn').style.display = 'none';
    },
    dlgButtonClick: function() {
      this.$refs.footerDialog.hide();
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

* {
  margin: 0;
}

#app {
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
  background-color: #29303b;

  .wrapper {
    padding: 50px;
    width: 800px;
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

      .section-left,
      .section-right {
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
        background-image: linear-gradient(45deg, #2b89e7, #11e763);
        font-size: 30px;
        border: none;
        border-radius: 25px;
        color: #fff;
        cursor: pointer;
      }

      .swap:focus {
        outline: none;
        background-image: linear-gradient(45deg, #317fcc, #1fc06a);
      }
    }
  }
}
</style>
