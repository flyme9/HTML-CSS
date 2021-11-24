<template>
    <div>
        detail
    </div>
</template>

<script>
export default {
    mounted () {
        // 获取对应详情页的影片id
        console.log(this.$route.params.id)
        this.$store.commit('hide')
    },
    unmounted () {
        this.$store.commit('show')
    }
}
</script>