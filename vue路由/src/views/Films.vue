<template>
    <div>
        <div style="height:200px;background:red">轮播图</div>
        nowPlay
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
                    {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      datalist: ['1111', '2222', '3333']
    }
  },
  methods: {
    handleChangePage (id) {
      // 原生编程式导航
    //   location.href = '#/detail'

      // Vue编程式导航-通过路径跳转
      // this.$router.push(`/detail/${id}`)

      // 通过命名路由跳转
      this.$router.push({
        name: 'Gao',
        params: {
          id
        }
      })
    }
  }
}
</script>
