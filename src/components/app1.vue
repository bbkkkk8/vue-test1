<template>
  <div class="wrapper">
    <p>{{hello}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return { hello: '我来自App1 模块' }
  }
}
</script>
<style >
.wrapper {
  color: red;
}
</style>
