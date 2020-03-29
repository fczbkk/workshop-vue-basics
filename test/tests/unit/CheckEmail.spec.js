import { shallowMount } from '@vue/test-utils'
import CheckEmail from './../../src/components/CheckEmail'

import { enableFetchMocks } from 'jest-fetch-mock'

describe('CheckEmail', () => {

  beforeAll(() => {
    enableFetchMocks()
  })

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('should start at 0', () => {
    const wrapper = shallowMount(CheckEmail)
    expect(wrapper.vm.count).toEqual(0)
  })

  it('should display loading indicator', function () {
    const wrapper = shallowMount(CheckEmail)
    const button = wrapper.find({ ref: 'updateButton' })

    expect(wrapper.vm.isLoading).toEqual(false)
    button.trigger('click')
    expect(wrapper.vm.isLoading).toEqual(true)
  })

  it('should display new count on success', (done) => {
    fetch.mockResponse(JSON.stringify({count: 1}))

    const wrapper = shallowMount(CheckEmail)
    const button = wrapper.find({ ref: 'updateButton' })
    button.trigger('click')

    setTimeout(() => {
      expect(wrapper.vm.count).toEqual(1)
      done()
    }, 0)
  })

  it('should display error on fail', (done) => {
    fetch.mockReject()

    const wrapper = shallowMount(CheckEmail)
    const button = wrapper.find({ ref: 'updateButton' })
    button.trigger('click')

    setTimeout(() => {
      expect(wrapper.vm.isError).toEqual(true)
      done()
    }, 0)
  })

})
