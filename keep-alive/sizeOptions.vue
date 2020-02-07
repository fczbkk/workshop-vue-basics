<template>
  <div>
    <h2>Size</h2>
    <ul>
      <li v-for="size in sizes" :key="size">
        <label>
          <input type="radio" name="size">
          {{ size }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        sizes: ['Small', 'Medium', 'Large', 'X-large', 'Fat']
      }
    }
  }
</script>

<style scoped>

</style>
