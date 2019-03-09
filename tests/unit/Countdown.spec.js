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

  it('broadcasts when the countdown is finished', () => {
    setEndTime(1, 'seconds')

    clock.tick(500)
    notExpectEvent('finished')

    clock.tick(1000)
    expectEvent('finished')
  })

  it('clears the interval once completed', () => {
    setEndTime(10, 'seconds')

    clock.tick(5000)
    expect(wrapper.vm.now.getSeconds()).to.equal(5)

    clock.tick(15000)
    expect(wrapper.vm.now.getSeconds()).to.equal(10) // timer stops after 10 sec.
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

  let expectEvent = (eventName, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper
    expect(wrap.emitted(eventName)).to.exist
  }

  let notExpectEvent = (eventName, selector) => {
    let wrap = selector ? wrapper.find(selector) : wrapper
    expect(wrap.emitted(eventName)).to.not.exist
  }
})
