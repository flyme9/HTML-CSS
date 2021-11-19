<template>
    <div class="header">
        <i class="iconfont icon-back" @click="handleBack"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
  methods: {
    handleBack () {
      // 返回上一个页面
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    padding-left: 0.15rem;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.45rem;
    background: white;
    text-align: center;
    line-height: 0.45rem;
    i{
        float: left;
        font-size: 0.22rem;
    }
}
</style>
