import { shallowMount } from '@vue/test-utils'
import AdjustableInputField from '../../src/components/AdjustableInputField'

describe('AdjustableInputField', () => {

  it('should start at 0', () => {
    const wrapper = shallowMount(AdjustableInputField)
    expect(wrapper.vm.inputValue).toEqual(0)
  })

  it('should use provided value', () => {
    const wrapper = shallowMount(AdjustableInputField, {propsData: {value: 42}})
    expect(wrapper.vm.inputValue).toEqual(42)
  })

  it('should react to clicking on add button', () => {
    const wrapper = shallowMount(AdjustableInputField)
    const button = wrapper.find({ref: 'addButton'})
    button.trigger('click')
    expect(wrapper.vm.inputValue).toEqual(1)
  })

  it('should not go below zero', () => {
    const wrapper = shallowMount(AdjustableInputField, {propsData: {value: 0}})
    const button = wrapper.find({ref: 'removeButton'})
    button.trigger('click')
    expect(wrapper.vm.inputValue).toEqual(0)
  })

  it('should render correctly', function () {
    const wrapper = shallowMount(AdjustableInputField)
    expect(wrapper.element).toMatchSnapshot()
  })

})
