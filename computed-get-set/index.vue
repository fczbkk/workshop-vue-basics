<template>
  <div>
    <p>First:<br><input v-model="firstName" /></p>
    <p>Last:<br><input v-model="lastName" /></p>
    <p>Full:<br><input v-model="fullName" /></p>
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
      fullName: {
        get () {
          return [this.firstName, this.lastName]
            .filter((chunk) => chunk !== '')
            .join(' ')
        },
        set (newName) {
          const [first = '', last = ''] = newName.split(' ')
          this.firstName = first
          this.lastName = last
        }
      }
    }
  }
</script>

<style scoped>

</style>
