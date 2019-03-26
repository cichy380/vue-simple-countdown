<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>vue-simple-countdown</h1>

    <div class="countdown-box">
      <strong>
        <v-countdown :end="endTime" @finished="countdownFinished()">
          <template v-slot:days="{ dayValue }">{{ dayValue }}d </template>
          <template v-slot:hours="{ hourValue }">{{ hourValue }}h </template>
          <template v-slot:minutes="{ minValue }">{{ minValue }}min </template>
          <template v-slot:seconds="{ secValue }">{{ secValue }}sec </template>
          yet...
        </v-countdown>
      </strong>

      to {{ endTime }}
    </div>

    <br>

    <div v-if="showAlert" class="alert">
      Now Expired!
    </div>

    <footer>
      <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <strong>Installed CLI Plugins</strong>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank" rel="noopener">unit-mocha</a></li>
      </ul>
      <strong>Essential Links</strong>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
import vCountdown from './components/Countdown'

export default {
  name: 'app',

  components: {
    vCountdown
  },

  data () {
    return {
      endTime: 'March 9 2029 16:07:05 GMT+0100',
      showAlert: false
    }
  },

  methods: {
    countdownFinished () {
      this.showAlert = true
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .countdown-box {
    display: inline-block;
    margin: auto;
    padding: 1rem;
    border: 1px solid #2c3e50;
  }
  .alert {
    display: inline-block;
    margin-top: 1rem;
    padding: .5em;
    background: red;
    color: white;
  }
  footer {
    margin-top: 3rem;
    font-size: 0.75rem;
    opacity: 0.65;
  }
  ul {
    margin-top: 0.25em;
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
