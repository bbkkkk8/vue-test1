<template>
  <div class="wrapper">
    <p>{{ msg }}</p>
    <button @click="getParam">getParam</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'I am redapple'
    }
  },
  methods: {
    getParam () {
      console.log(this.$route.params)
    }
  }
}
</script>
<style scoped>
.wrapper {
}
</style>
