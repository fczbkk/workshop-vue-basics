<template>
  <ul>
    <li v-for="(item, index) in children" :key="index">
      <div>
        <strong>{{ item.title }}</strong>
        ({{ parents.join(' / ') }})
      </div>
      <tree-list
        v-if="item.children"
        :children="item.children"
        :parents="[...parents, item.title]"
      />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TreeList',
    props: {
      children: {
        type: Array,
        default: () => []
      },
      parents: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>
