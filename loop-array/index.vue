<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        {{ item }}
        ({{ index }})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: ['Simple t-shirt', 'Long skirt', 'Swim suit']
      }
    }
  }
</script>

<style scoped>

</style>
