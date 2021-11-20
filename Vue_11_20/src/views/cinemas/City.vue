<template>
    <van-index-bar :index-list="indexList">
        <div v-for="data  in cityList" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell v-for="item in data.list" :title="item.name" :key="item.cityId"/>
        </div>
    </van-index-bar>
</template>

<script>
import http from '@/util/http'
export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    indexList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    http({
      url: '/gateway?k=4343038',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      this.cityList = this.renderCity(res.data.data.cities)
    })
  },
  methods: {
    renderCity (list) {
      var letterList = []
      var cityList = []
      // 创建A-Z的数组
      for (var i = 65; i <= 90; i++) {
        letterList.push(String.fromCharCode(i))
      }
      // 城市首字母分类处理
      letterList.forEach(letter => {
        var newlist = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        newlist.length > 0 && cityList.push({ type: letter, list: newlist })
      })
      return cityList
    }
  }
}
</script>
