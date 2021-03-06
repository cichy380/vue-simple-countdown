<template>
  <div class="vue-simple-countdown">
    <span v-if="remaining.showDays" class="vue-simple-countdown__days">
      <slot name="days"  v-bind:dayValue="remaining.days">
        {{ remaining.days }} days
      </slot>
    </span>

    <span v-if="remaining.showHours" class="vue-simple-countdown__hours">
      <slot name="hours"  v-bind:hourValue="remaining.hours">
        {{ remaining.hours }} hours
      </slot>
    </span>

    <span v-if="remaining.showMinutes" class="vue-simple-countdown__minutes">
      <slot name="minutes"  v-bind:minValue="remaining.minutes">
        {{ remaining.minutes }} minutes
      </slot>
    </span>

    <span class="vue-simple-countdown__seconds">
      <slot name="seconds"  v-bind:secValue="remaining.seconds">
        {{ remaining.seconds }} seconds
      </slot>
    </span>

    <slot>left...</slot>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Countdown',

  props: {
    end: {
      type: String,
      validator: value => (new Date(value) !== 'Invalid Date') && !isNaN(new Date(value))
    }
  },

  data () {
    return {
      now: new Date()
    }
  },

  computed: {
    remaining () {
      let remaining = moment.duration(Date.parse(this.end) - this.now)
      let days = Math.floor(remaining.asDays())
      let hours = remaining.hours()
      let minutes = remaining.minutes()
      let seconds = remaining.seconds()

      if (remaining.asSeconds() <= 0) {
        seconds = 0
        this.$emit('finished')
      }

      return {
        showDays: days >= 1,
        days,
        showHours: remaining.asSeconds() >= (60 * 60),
        hours,
        showMinutes: remaining.asSeconds() >= 60,
        minutes,
        seconds,
        asSeconds: remaining.asSeconds()
      }
    }
  },

  created () {
    let timerId = setInterval(() => {
      this.now = new Date()
    }, 1000)

    this.$on('finished', () => clearInterval(timerId))
  }
}
</script>
