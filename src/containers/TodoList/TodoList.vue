<template>
  <div>
	  <Header @add="addUndoItem" />
    <undoList :list="undoList" @delete="handleItemDelete" />
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
      this.undoList.push(inputValue)
    },
    handleItemDelete (index) {
      this.undoList.splice(index,1)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
