<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mytext:''
    }
  },
  directives: {
    hello:{
      mounted () {
        console.log('mounted')
      }
    }
  }
}
</script>