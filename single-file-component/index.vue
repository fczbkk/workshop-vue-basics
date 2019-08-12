<template>
  <div class="wrapper">
    <div>
      First name:
      <input v-model="firstName" />
    </div>
    <div>
      Last name:
      <input v-model="lastName" />
    </div>
    <div class="fullName">{{ fullName }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    },

    computed: {
      fullName: function () {
        return `${this.firstName} ${this.lastName}`
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    font-family: sans-serif;
    font-size: 2em;
  }
  .fullName {
    background: yellow;
  }
</style>
