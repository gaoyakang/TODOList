import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/header.vue'
import UndoList from '../../components/undoList.vue'


describe('TodoList测试', () => {
  it('TodoList 初始化时，ubdoList应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('TodoList 中 addUndoItem被执行后，会增加一个内容', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
      {status: 'div',value: 1},
      {status: 'div',value: 2},
      {status: 'div',value: 3}
      ]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([
      {status: 'div',value: 1},
      {status: 'div',value: 2},
      {status: 'div',value: 3},
      {status: 'div',value: 4}
      ])


  })

  it('TodoList 调用 undoList 应该传递list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('TodoList中handleItemDelete方法被调用时，undolist列表内容会减1', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
      {status: 'div',value: 1},
      {status: 'div',value: 2},
      {status: 'div',value: 3}
      ]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      {status: 'div',value: 1},
      {status: 'div',value: 3}]
      )
  })

  it('TodoList中 changeStatus 方法被调用时，undolist列表内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
      {status: 'div',value: 1},
      {status: 'div',value: 2},
      {status: 'div',value: 3}
      ]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      {status: 'div',value: 1},
      {status: 'input',value: 2},
      {status: 'div',value: 3}]
      )
  })

  it('TodoList中 resetStatus 方法被调用时，undolist列表内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
      {status: 'div',value: 1},
      {status: 'input',value: 2},
      {status: 'div',value: 3}
      ]
    })
    wrapper.vm.resetStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      {status: 'div',value: 1},
      {status: 'div',value: 2},
      {status: 'div',value: 3}]
      )
  })

  it('TodoList中 changeItemValue 方法被调用时，undolist列表内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
      {status: 'div',value: 1},
      {status: 'input',value: 2},
      {status: 'div',value: 3}
      ]
    })
    wrapper.vm.changeItemValue({
      index: 1,
      value: "JEST"
    })
    expect(wrapper.vm.$data.undoList).toEqual([
      {status: 'div',value: 1},
      {status: 'input',value: "JEST"},
      {status: 'div',value: 3}]
      )
  })
})
