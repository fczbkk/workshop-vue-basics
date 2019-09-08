<template>
  <div class="wrapper">
    <h1>Title using primary color</h1>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

  $primary-color: #c00;

  // nesting
  .wrapper {

    h1 {
      // variable
      color: $primary-color;
    }

  }

</style>
