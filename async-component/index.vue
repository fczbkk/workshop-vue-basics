<template>
  <div>
    <h1>Async</h1>
    <async-component />

    <h1>Delayed</h1>
    <delayed-component />

    <h1>Delayed with indicator</h1>
    <delayed-component-with-indicator />
  </div>
</template>

<script>
  import LoadingIndicator from './loadingIndicator.vue'
  import ErrorIndicator from './errorIndicator.vue'

  export default {
    components: {
      LoadingIndicator,
      ErrorIndicator,

      AsyncComponent: () => import('./asyncComponent.vue' /* webpackChunkName: 'async-component' */),

      DelayedComponent: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            import('./delayedComponent.vue' /* webpackChunkName: 'delayed-component' */)
              .then(resolve)
          }, 2000)
        })
      },

      DelayedComponentWithIndicator: () => ({
        component: (
          new Promise((resolve) => {
            setTimeout(() => {
              import('./delayedComponentWithIndicator.vue' /* webpackChunkName: 'delayed-component-with-indicator' */)
                .then(resolve)
            }, 5000)
          })
        ),
        loading: LoadingIndicator,
        error: ErrorIndicator,
        delay: 200,
        timeout: 3000
      })
    }
  }
</script>

<style scoped>

</style>
