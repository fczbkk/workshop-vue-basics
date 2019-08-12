<template>
  <div>
    <ul class="itemsList">
      <li v-for="(item, index) in items" :key="index">
        <list-item :label="item" />
      </li>
    </ul>
    <item-form />
  </div>
</template>

<script>
  import ItemForm from './itemForm.vue'
  import ListItem from './listItem.vue'

  export default {
    components: {
      ListItem,
      ItemForm
    },
    data () {
      return {
        items: [
          'T-shirt',
          'Hat',
          'Skirt'
        ]
      }
    },
    methods: {
      editItem () {
        alert('edit item')
      }
    }
  }
</script>

<style scoped>
  .itemsList {
    list-style: none;
    margin: 0;
    padding: 0;
    max-width: 20em;
  }
</style>
