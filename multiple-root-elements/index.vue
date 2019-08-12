<template>
  <dl>
    <definition-item
      term="First term"
      description="First description"
    />
    <definition-item
      term="Second term"
      description="Second description"
    />
  </dl>
</template>

<script>
  import DefinitionItem from './definitionItem'

  export default {
    components: {DefinitionItem}
  }
</script>
