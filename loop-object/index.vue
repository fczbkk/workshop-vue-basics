<template>
  <div>
    <ul>
      <li
        v-for="(value, key) in items"
        :key="key"
      >
        {{ value }}
        ({{ key }})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: {
          tshirt: 'Simple t-shirt',
          skirt: 'Long skirt',
          swimsuit: 'Swim suit'
        }
      }
    }
  }
</script>

<style scoped>

</style>
