import { shallowMount } from '@vue/test-utils'
import AdjustableInput from './../../src/components/AdjustableInput'

describe('AdjustableInput', () => {

  it('should start at 0', () => {
    const wrapper = shallowMount(AdjustableInput)
    expect(wrapper.vm.inputValue).toEqual(0)
  })

  it('should use provided value', () => {
    const wrapper = shallowMount(AdjustableInput, {propsData: {value: 42}})
    expect(wrapper.vm.inputValue).toEqual(42)
  })

  it('should react to clicking on add button', () => {
    const wrapper = shallowMount(AdjustableInput)
    const button = wrapper.find({ref: 'addButton'})
    button.trigger('click')
    expect(wrapper.vm.inputValue).toEqual(1)
  })

  it('should not go below zero', () => {
    const wrapper = shallowMount(AdjustableInput, {propsData: {value: 0}})
    const button = wrapper.find({ref: 'removeButton'})
    button.trigger('click')
    expect(wrapper.vm.inputValue).toEqual(0)
  })

  it('should render correctly', function () {
    const wrapper = shallowMount(AdjustableInput)
    expect(wrapper.element).toMatchSnapshot()
  })

})
