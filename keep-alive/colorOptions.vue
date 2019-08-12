<template>
  <div>
    <h2>Color</h2>
    <ul>
      <li v-for="color in colors" :key="color">
        <label>
          <input type="radio" name="color">
          {{ color }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: ['yellow', 'red', 'green', 'blue', 'black']
      }
    }
  }
</script>

<style scoped>

</style>
