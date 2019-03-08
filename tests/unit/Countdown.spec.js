import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import vCountdown from '@/components/Countdown.vue'
import moment from 'moment'
import sinon from 'sinon'

describe('Countdown.vue', () => {
  let wrapper,
    clock

  beforeEach(() => {
    clock = sinon.useFakeTimers()
    wrapper = shallowMount(vCountdown)
  })

  afterEach(() => {
    clock.restore()
  })

  it('renders a countdown timer', () => {
    setEndTime(10, 'seconds')
    see('10 seconds')

    setEndTime(15, 'minutes')
    see('15 minutes')

    setEndTime(5, 'hours')
    see('5 hours')

    setEndTime(2, 'days')
    see('2 days')
  })

  it('reduces the countdown every second', () => {
    setEndTime(10, 'seconds')
    see('10 seconds')

    clock.tick(2000)
    see('8 seconds')
  })

  // Helper Functions

  let see = (text, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper

    expect(wrap.html()).include(text)
  }

  let setEndTime = (amount, unit, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper

    wrap.setProps({ end: moment().add(amount, unit) })
  }
})
