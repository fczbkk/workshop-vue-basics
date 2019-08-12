<template>
  <div>
    <my-counter />
    <my-counter />
    <my-counter />
  </div>
</template>

<script>
  import MyCounter from './counter.vue'
  export default {
    components: {
      MyCounter
    }
  }
</script>

<style scoped>

</style>
