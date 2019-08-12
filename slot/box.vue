<template>
  <div class="box">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .box {
    margin: 1em;
    padding: 1em;
    border: 5px solid red;
  }
</style>
