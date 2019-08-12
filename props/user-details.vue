<template>
  <div>
    This is user <strong>{{ firstName }} {{ lastName }}</strong>
  </div>
</template>

<script>
  export default {
    props: {
      firstName: {
        type: String,
        default: 'John'
      },
      lastName: {
        type: String,
        default: 'Doe'
      }
    }
  }
</script>
