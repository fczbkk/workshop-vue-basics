<template>
  <ul>
    <li
      v-for="(category, categoryId) in categories"
      :key="categoryId"
      @click="selectedCategory = categoryId"
    >
      <category-item
        :title="category"
        :class="{highlighted: categoryId === selectedCategory}"
      />
    </li>
  </ul>
</template>

<script>
  import CategoryItem from './category-item.vue'

  export default {
    components: {
      CategoryItem
    },
    data () {
      return {
        selectedCategory: null,
        categories: {
          tshirt: 'T-shirt',
          hat: 'Hat',
          skirt: 'Skirt'
        }
      }
    }
  }
</script>

<style scoped>
  .highlighted {
    background: green;
  }
</style>
