<template>
  <div>
	  <Header @add="addUndoItem" />
    <undoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="changeStatus"
      @reset="resetStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import Header from './components/header.vue'
import undoList from './components/undoList.vue'

export default {
  name: 'TodoList',
  components: {
    Header,
    undoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (inputValue) {
      this.undoList.push({
        status: 'div',
        value: inputValue
      })
    },
    handleItemDelete (index) {
      this.undoList.splice(index,1)
    },
    changeStatus (index) {
      const newList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newList.push({
            status: 'input',
            value: item.value
          })
        } else {
          newList.push({
            status: 'div',
            value: item.value
          })
        }
      })
      this.undoList = newList
    },
    resetStatus () {
      const newList =[]
      this.undoList.forEach((item, itemIndex) => {
          newList.push({ status: 'div', value: item.value })
      })
      this.undoList = newList
    },
    changeItemValue (obj) {
      this.undoList[obj.index].value = obj.value
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
