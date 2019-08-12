<template>
  <div>
    <h1>Lazy</h1>
    <p>
      <input v-model.lazy="lazyValue">
      {{lazyValue}}
    </p>

    <h1>Number</h1>
    <p>
      <input v-model.number="numberValue">
      {{numberValue + 5}}
    </p>

    <h1>Trim</h1>
    <p>
      Trim value:
      <input v-model.trim="trimValue">
    </p>
    <pre>-{{trimValue}}-</pre>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lazyValue: '',
        numberValue: 0,
        trimValue: ''
      }
    }
  }
</script>
