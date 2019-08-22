import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/header.vue'

describe('TodoList测试', () => {
  it('TodoList 初始化时，ubdoList应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 监听到 header 的 add事件的时候，会增加一个内容', () => {
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    header.vm.$emit('add',"JEST")
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual(['JEST'])
  })
})
