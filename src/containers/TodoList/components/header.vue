<template>
  <div class="header">
    <div class="header-content">
      TODOLIST
      <input
        data-test="input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        class="header-input"
        placeholder="您要干点嘛啊-~~~"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem (inputValue) {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue =''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .header {
    line-height: 60px;
    background: #333;
  }
  .header-content {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;
    background: #333;
  }
  .header-input {
    float: right;
    width: 360px;
    background: #eee;
    margin-top: 16px
    line-height: 24px;
    outline: none;
    color: #333;
    text-indent: 10px;
  }
</style>
