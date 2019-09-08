<template>
  <div>
    <tree-list
      :children="treeItems"
      :parents="[]"
    />
  </div>
</template>

<script>
  import TreeList from './TreeList.vue'

  export default {
    components: {TreeList},
    compontents: {
      TreeList
    },
    data () {
      return {
        treeItems: [
          {
            title: 'First top level',
            children: [
              {
                title: 'First sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              },
              {
                title: 'Second sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              },
              {
                title: 'Third sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              }
            ]
          },
          {
            title: 'Second top level',
            children: [
              {
                title: 'First sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              },
              {
                title: 'Second sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              },
              {
                title: 'Third sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              }
            ]
          },
          {
            title: 'Third top level',
            children: [
              {
                title: 'First sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              },
              {
                title: 'Second sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              },
              {
                title: 'Third sub level',
                children: [
                  {title: 'First sub-sub level'},
                  {title: 'Second sub-sub level'},
                  {title: 'Third sub-sub level'}
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
