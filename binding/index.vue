<template>

  <div>

    <h1>Model</h1>
    <div>
      First name: <input v-model="firstName" />
    </div>
    <div>
      Last name: <input v-model="lastName" />
    </div>

    <h1>Bind</h1>
    <div>
      First name: <input :value="firstName" />
    </div>
    <div>
      Last name: <input :value="lastName" />
    </div>

    <h1>Data</h1>
    <div>
      {{firstName}} {{lastName}}
    </div>

  </div>

</template>

<script>
  export default {
    data () {
      return {
        firstName: 'John',
        lastName: 'Doe'
      }
    }
  }
</script>

<style scoped>

</style>
