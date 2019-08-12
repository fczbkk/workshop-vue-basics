<template>
  <form
    method="get"
    ref="itemForm"
    @submit.prevent="validateForm"
  >
    <div>Item name (no numbers!)</div>
    <div><input v-model="itemName" name="itemName" /></div>
    <div><input type="submit" /></div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        itemName: ''
      }
    },

    methods: {
      validateForm () {
        const isNotEmpty = this.itemName.length > 0
        const containsNumber = /\d/.test(this.itemName)
        if (isNotEmpty && !containsNumber) {
          this.$refs.itemForm.submit()
        }
      }
    }
  }
</script>

<style scoped>

</style>
