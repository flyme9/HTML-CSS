<template>
    <div>
        center
    </div>
</template>

<script>

export default ({
  // 路由生命周期
  beforeRouteEnter (to, from, next) {
    // ${//does NOT have access to `this` component instance}
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        // 不满足条件跳转的页面
        path: '/login',
        // 将将不满足条件的页面路径以参数放在url后面
        query: { redirect: to.fullPath }
      })
    }
  }
})
</script>
