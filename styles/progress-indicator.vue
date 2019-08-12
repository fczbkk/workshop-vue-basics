<template>
  <div class="progressIndicator">
    <div class="outer">
      <div
        class="inner"
        :style="{width: value + '%'}"
      ></div>
    </div>
    <div class="label">{{value}}%</div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>
  .progressIndicator {
    display: flex;
    margin: 0.5em 0;
  }
  .outer {
    flex-grow: 1;
    border: 1px solid blue;
  }
  .inner {
    height: 1em;
    background: blue;
  }
  .label {
    flex-grow: 0;
    width: 4em;
    text-align: right;
  }
</style>
