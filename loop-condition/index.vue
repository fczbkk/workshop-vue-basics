<template>
  <div>
    <ul>
      <li
        v-for="(item, key) in items"
        v-if="item.isAvailable"
        :key="key"
      >
        {{ item.title }}
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
          tshirt: {title: 'Simple t-shirt', isAvailable: true},
          skirt: {title: 'Long skirt', isAvailable: false},
          swimsuit: {title: 'Swim suit', isAvailable: true}
        }
      }
    }
  }
</script>

<style scoped>

</style>
