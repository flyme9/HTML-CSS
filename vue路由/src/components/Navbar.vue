<template>
    <div>
        <!-- 父组件传递数据给子组件 -->
        <button v-show="leftbtn">left</button>
        {{myname}}
        <!-- 子组件传递数据给父组件 -->
        <button @click="handleRight">right</button>

        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    myname: {
      type: String,
      default: '主页'
    },
    leftbtn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleRight () {
      // 点击后触发父组件event事件
      this.$emit('event')
    }
  }
}
</script>
