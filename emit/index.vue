<template>
  <div>
    <p>Items in cart: {{itemsInCart}}</p>
    <cart-manipulator
      @setItems="handleSetItems"
      @removeAll="itemsInCart = 0"
    />
  </div>
</template>

<script>
  import CartManipulator from './cartManipulator.vue'
  export default {
    components: {
      CartManipulator
    },
    data () {
      return {
        itemsInCart: 0
      }
    },
    methods: {
      handleSetItems (count) {
        this.itemsInCart = count
      }
    }
  }
</script>
