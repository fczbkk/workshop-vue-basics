<template>
  <div>

    <h1>Controls</h1>
    <p>
      <label>
        <input type="checkbox" v-model="isAvailable">
        is available
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" v-model="hasVariants">
        has variants
      </label>
    </p>

    <h1>Product details</h1>
    <p v-if="!isAvailable">This product is not available</p>
    <p v-else-if="hasVariants">This product is available in red and blue variants.</p>
    <p v-else>This product is available only in red.</p>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        isAvailable: true,
        hasVariants: false
      }
    }
  }
</script>
