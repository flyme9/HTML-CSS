var mixin = {
  created () {
    this.$store.commit('hidden')
  },
  destroyed () {
    this.$store.commit('show')
  }
}

export default mixin
