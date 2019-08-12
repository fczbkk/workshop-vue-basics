<template>
  <div>
    <input v-model="itemsInCart" />
    <button @click="$emit('setItems', itemsInCart)">Set cart items</button>
    or
    <button @click="removeAll">Remove all</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        itemsInCart: 0
      }
    },
    methods: {
      removeAll () {
        this.itemsInCart = 0
        this.$emit('removeAll')
      }
    }
  }
</script>

<style scoped>

</style>
