<template>
    <div>
        detail
    </div>
</template>

<script>

export default ({
  created () {
    // 获取id
    console.log(this.$route.params.id)
  }
})
</script>
