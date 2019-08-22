import { shallowMount } from '@vue/test-utils'
import Header from '../../components/header.vue'

describe('Header.vue', () => {
  it('header样式发生改变时给出提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })

  it('header 包含 input框', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    expect(input.exists()).toBe(true)
  })

  it('header 中 input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })

  it('header 中 input 框输入值发生改变，数据也跟着变', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue("JEST")
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('JEST')
  })

  it('header 中 input 框输入回车，无内容无反应', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue("")
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('header 中 input 框输入回车，有内容向外触发事件,清空inputValue', () => {
    const wrapper = shallowMount(Header)
    const input = wrapper.find('[data-test="input"]')
    input.setValue("JEST")
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})
