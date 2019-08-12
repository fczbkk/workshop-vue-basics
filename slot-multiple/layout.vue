<template>
  <div>
    <header>
      <h1>My e-shop</h1>
      <slot name="header" />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" />
      <div>(c) 2019 by My Company</div>
    </footer>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  header, footer, main {
    padding: 1em;
  }
  header, footer {
    background: gray;
  }
</style>
