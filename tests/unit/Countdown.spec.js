import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import vCountdown from '@/components/Countdown.vue'

describe('Countdown.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(vCountdown)
  })

  it('renders div.vue-simple-countdown when passed', () => {
    expect(wrapper.find('.vue-simple-countdown').exists()).to.be.true // <div class="vue-simple-countdown" />
  })
})
