<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
