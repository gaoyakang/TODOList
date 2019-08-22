  import { shallowMount } from '@vue/test-utils'
  import UndoList from '../../components/undoList.vue'
  import { findTestWrapper } from '../../../../utils/testUtils'

  describe('undoList.vue', () => {
    it('undoList 参数为[], count值为0，且列表无内容', () => {
      const wrapper = shallowMount(UndoList, {
        propsData: {
          list: []
        }
      })
      const countElem = findTestWrapper(wrapper, 'count')
      const listItems = findTestWrapper(wrapper, 'item')
      expect(countElem.at(0).text()).toEqual('0')
      expect(listItems.length).toEqual(0)
    })

    it('undoList 参数为[1,2,3], count值为3，且列表有内容，且存在删除按钮', () => {
      const wrapper = shallowMount(UndoList, {
        propsData: {
          list: [1,2,3]
        }
      })
      const countElem = findTestWrapper(wrapper, 'count')
      const listItems = findTestWrapper(wrapper, 'item')
      const deleteButtons = findTestWrapper(wrapper, 'delete-button')
      expect(countElem.at(0).text()).toEqual('3')
      expect(listItems.length).toEqual(3)
      expect(deleteButtons.length).toEqual(3)
    })

    it('undoList 删除按钮被点击时，向外触发删除事件', () => {
      const wrapper = shallowMount(UndoList, {
        propsData: {
          list: [1,2,3]
        }
      })
      const deleteButtons = findTestWrapper(wrapper, 'delete-button').at(1)
      deleteButtons.trigger('click')
      expect(wrapper.emitted().delete).toBeTruthy()
      expect(wrapper.emitted().delete[0][0]).toBe(1)
    })
  })
