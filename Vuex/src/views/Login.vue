<template>
    <div>
        login
        <button @click="handleLogin">登录</button>
    </div>
</template>
<script>

export default ({
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', '后端返回的token字段')
        this.$router.push(this.$route.query.redirect) // 返回到前一个页面
      }, 2000)
    }
  }
})
</script>
