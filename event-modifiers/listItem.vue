<template>
  <div
    class="listItem"
    :class="{isSelected}"
    @click.once="isSelected = !isSelected"
    @click.shift="isSelected = !isSelected"
  >
    {{ label }}
    <list-item-actions :label="label" class="listItemActions" />
  </div>
</template>

<script>
  import ListItemActions from './listItemActions'

  export default {
    data () {
      return {
        isSelected: false
      }
    },
    props: {
      label: {
        type: String,
        required: true
      }
    },
    components: {
      ListItemActions
    }
  }
</script>

<style scoped>
  .listItem {
    padding: 1em;
    background: #ccc;
    margin: 0.5em 0;
  }
  .isSelected {
    background: #0c0;
  }
  .listItemActions {
    float: right;
  }
</style>
