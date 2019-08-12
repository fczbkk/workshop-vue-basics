<template>
  <div>
    <h1>Product options</h1>
    <p>
      <button @click="showOptions('color')">Colors</button>
      <button @click="showOptions('size')">Sizes</button>
    </p>

    <keep-alive>
      <component :is="currentOptionType" />
    </keep-alive>
  </div>
</template>

<script>
  import ColorOptions from './colorOptions'
  import SizeOptions from './sizeOptions'
  export default {
    components: {
      ColorOptions,
      SizeOptions
    },
    data () {
      return {
        currentOptionType: ColorOptions
      }
    },
    methods: {
      showOptions (optionType) {
        if (optionType === 'color') {
          this.currentOptionType = ColorOptions
        } else if (optionType === 'size') {
          this.currentOptionType = SizeOptions
        } else {
          this.currentOptionType = ColorOptions
        }
      }
    }
  }
</script>

<style scoped>

</style>
