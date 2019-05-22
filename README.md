# vue-simple-countdown

A simple countdown component for [Vue](https://vuejs.org/).

## Dependencies

* [Vue.js 2](https://vuejs.org/) - progressive JavaScript framework

## Usage

#### basic

```vue
<template>
  <div>
    <v-countdown :end="endTime"></v-countdown>
  </div>
</template>

<script>
import vCountdown from './components/Countdown'

export default {
  components: { vCountdown },
  data () {
    return {
      endTime: '2029-05-23 7:00 PM'
    }
  },
}
</script>
```

#### using the countdown finish event

```vue
<template>
  <div>
    <v-countdown :end="endTime" @finished="countdownFinished()"></v-countdown>
    <div v-if="showAlert" class="alert">Now Expired!</div>
  </div>
</template>

<script>
import vCountdown from './components/Countdown'

export default {
  components: { vCountdown },

  data () {
    return {
      endTime: '2029-05-23 7:00 PM',
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
```

#### using translation via slots

```vue
<template>
  <div>
    <v-countdown :end="endTime">
      <template v-slot:days="{ dayValue }">{{ dayValue }}dni </template>
      <template v-slot:hours="{ hourValue }">{{ hourValue }}godz. </template>
      <template v-slot:minutes="{ minValue }">{{ minValue }}min. </template>
      <template v-slot:seconds="{ secValue }">{{ secValue }}sek. </template>
    </v-countdown>
  </div>
</template>

<script>
import vCountdown from './components/Countdown'

export default {
  components: { vCountdown },
  data () {
    return {
      endTime: '2029-05-23 7:00 PM'
    }
  },
}
</script>
```

## Contributing

This project was generated with [Vue CLI](https://cli.vuejs.org/) version 3.4.0.

#### Installed plugins

 * [@vue/cli-service](https://cli.vuejs.org/) - local service for vue-cli projects
 * [@vue/cli-plugin-babel](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel) - babel plugin for vue-cli
 * [@vue/cli-plugin-eslint](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint) - eslint plugin for vue-cli
 * [@vue/cli-plugin-unit-mocha](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha) - mocha unit testing plugin for vue-cli
 
 #### Build Setup
 
 ``` bash
 # project setup
 yarn install
 
 # compiles and hot-reloads for development
 yarn run serve
 
 # compiles and minifies for production
 yarn run build
 
 # run your unit tests
 yarn run test:unit
 
 # lints and fixes files
 yarn run lint
 ```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
