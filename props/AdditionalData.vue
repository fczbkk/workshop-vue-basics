<template>
  <div>
    <p>Specializations: {{ specializations }}</p>
    <p>Hobbies: {{ hobbies }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      specializations: {
        type: String,
        required: true
      },
      hobbies: {
        type: String,
        default: 'none'
      }
    }
  }
</script>

<style scoped>

</style>
